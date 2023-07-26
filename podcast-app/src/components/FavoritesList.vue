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
        <v-btn icon="mdi-play" size="large" color="green" @click="episodeSelectedHandler" :data-key="favorite.id"></v-btn>
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

const episodeSelectedHandler = (event) => {

  const episodeToPlayId = event.target.closest('[data-key]').dataset.key
  const episodeToPlay = props.favoritesData.find((episode) => episode.id == episodeToPlayId)

  currentlyPlaying.value.showId = episodeToPlay.showId
  currentlyPlaying.value.showTitle = episodeToPlay.showTitle
  currentlyPlaying.value.episodeTitle = episodeToPlay.episodeTitle
  currentlyPlaying.value.episode = episodeToPlay.episode
  currentlyPlaying.value.file = null
  currentlyPlaying.value.timePlayed = 0

  return currentlyPlaying.value
}

let checkKey = ref(0)

const removeFavorite = async (favorite) => {
  try {
    // Check if the episode is already favorited
    if (favorite.isFavorite) {
      // If it's favorited, remove it from the database
      await supabase
        .from('favorites')
        .delete()
        .eq('id', favorite.id)
      console.log("Removed fav")
    }

    // Update the isFavorite property in the episode object
    favorite.isFavorite = !favorite.isFavorite;
    checkKey.value++
  } catch (error) {
    console.error('Error toggling favorite:', error);
  }
};

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
