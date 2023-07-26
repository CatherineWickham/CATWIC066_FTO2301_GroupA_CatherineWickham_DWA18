<template>
  <v-card width="100%" v-for="favorite in props.favoritesData" :key="favorite.id">
    <div class="favContainer" v-if="favorite.isFavorite" :key="checkKey">
      <div class="favImage">
        <v-img :src="favorite.image" width="200" cover></v-img>
      </div>
      <div class="favInfo">
        <v-card-title>
          {{ favorite.episodeTitle }}
        </v-card-title>
        <v-card-subtitle>{{ favorite.showTitle + ' - Season ' + favorite.season }}</v-card-subtitle>
        <v-card-text>{{ favorite.episodeDescription }}</v-card-text>
        <v-btn icon="mdi-play" size="large" color="green" @click="episodeSelectedHandler(favorite)"
          :data-key="favorite.id"></v-btn>
        <v-btn icon='mdi-close' variant="tonal" size="large" @click="removeFavorite(favorite)"
          :data-key="favorite.id"></v-btn>
      </div>
    </div>
    <div v-else>Favorite removed</div>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/app';
import { supabase } from '@/clients/supabase';

const props = defineProps(['favoritesData'])

const { currentlyPlaying } = storeToRefs(useAppStore())

let checkKey = ref(0)

const removeFavorite = async (favorite) => {
  try {
    await supabase
      .from('favorites')
      .update({ is_favorite: !favorite.isFavorite })
      .eq('showId', favorite.showId)
      .eq('season', favorite.season)
      .eq('episode', favorite.episode);
    console.log("Updated existing fav in database")

    // Update the isFavorite property in the episode object
    favorite.isFavorite = !favorite.isFavorite;
    checkKey.value++
  } catch (error) {
    console.error('Error removing favorite:', error);
  }
};

const episodeSelectedHandler = (favorite) => {

  currentlyPlaying.value.showId = favorite.showId
  currentlyPlaying.value.showTitle = favorite.showTitle
  currentlyPlaying.value.episodeTitle = favorite.episodeTitle
  currentlyPlaying.value.episode = favorite.episode
  currentlyPlaying.value.file = favorite.file
  currentlyPlaying.value.timePlayed = favorite.timePlayed

  console.log(currentlyPlaying.value)

  return currentlyPlaying.value
}

</script>

<style scoped>
.v-card {
  margin: 1rem;
}

.favContainer {
  display: flex;
}

.favImage {
  flex: 1;
  margin: 1rem;
}

.favInfo {
  flex: 5
}
</style>

<!-- // const removeFavorite = async (favorite) => {
  //   try {
  //     // Check if the episode is already favorited
  //     if (favorite.isFavorite) {
  //       // If it's favorited, remove it from the database
  //       await supabase
  //         .from('favorites')
  //         .delete()
  //         .eq('id', favorite.id)
  //       console.log("Removed fav")
  //     }
  
  //     // Update the isFavorite property in the episode object
  //     favorite.isFavorite = !favorite.isFavorite;
  //     checkKey.value++
  //   } catch (error) {
  //     console.error('Error toggling favorite:', error);
  //   }
  // };
  
  // const episodeSelectedHandler = async (event) => {
  //   try {
  //     // If episode is already in database, get record from the database for start time
  //     const episodeToPlayId = event.target.closest('[data-key]').dataset.key
  //     const episodeToPlay = props.favoritesData.find((episode) => episode.id == episodeToPlayId)
  
  //     let time = 0
  //     let { data } = await supabase
  //       .from('favorites')
  //       .select('id, time_played') // can work off just the ID?
  //       .eq('showId', episodeToPlay.id)
  //       .eq('season', episodeToPlay.season)
  //       .eq('episode', episodeToPlay.episode)
  //     if (data.length > 0) {
  //       time = data[0].time_played
  //       console.log("Episode already in database")
  //     } else {
  //       time = 0
  //     }
  
  //     // Update the the currently playing value in the store
  //     currentlyPlaying.value.showId = episodeToPlay.showId
  //     currentlyPlaying.value.showTitle = episodeToPlay.showTitle
  //     currentlyPlaying.value.episodeTitle = episodeToPlay.episodeTitle
  //     currentlyPlaying.value.episode = episodeToPlay.episode
  //     currentlyPlaying.value.season = episodeToPlay.season
  //     currentlyPlaying.value.file = episodeToPlay.file
  //     currentlyPlaying.value.timePlayed = time // If is data, gets set from DB, otherwise is 0
  //   }
  //   catch (error) {
  //     console.error('Error adding listening history / loading currently playing:', error);
  //   }
  // }; -->