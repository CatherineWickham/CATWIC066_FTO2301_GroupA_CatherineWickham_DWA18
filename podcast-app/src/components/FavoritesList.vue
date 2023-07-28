<template>
  <v-card width="100%" v-for="favorite in props.sortedFavoritesData" :key="favorite.id">
    <div class="favContainer" v-if="favorite.isFavorite" :key="checkKey">
      <div class="favImage">
        <v-img :src="favorite.image" width="200" cover></v-img>
      </div>
      <div class="favInfo">

        <div class="text">
          <v-card-title>
            {{ favorite.showTitle + ' - Season ' + favorite.season }}
          </v-card-title>
          <v-card-subtitle>
            {{ favorite.episodeTitle + ' - Episode ' + favorite.episode }}
          </v-card-subtitle>
          <v-card-text>{{ favorite.episodeDescription }}</v-card-text>
          <v-chip>
            LAST UPDATED:
            {{ (new Date(favorite.lastUpdated)).getDate().toString().padStart(2, '0') }}/
            {{ ((new Date(favorite.lastUpdated)).getMonth() + 1).toString().padStart(2, '0') }}/
            {{ (new Date(favorite.lastUpdated)).getFullYear() }}
          </v-chip>
          <v-chip>
            ADDED TO FAVORITES:
            {{ (new Date(favorite.dateAdded)).getDate().toString().padStart(2, '0') }}/
            {{ ((new Date(favorite.dateAdded)).getMonth() + 1).toString().padStart(2, '0') }}/
            {{ (new Date(favorite.dateAdded)).getFullYear() }}
            {{ (new Date(favorite.dateAdded)).getHours() }}:{{ (new Date(favorite.dateAdded)).getMinutes() }}
          </v-chip>
        </div>

        <div class="actions">
          <v-btn class="actionButton" icon="mdi-play" size="large" color="purple" variant="outlined"
            @click="episodeSelectedHandler(favorite)" :data-key="favorite.id"></v-btn>
          <v-btn class="actionButton" icon='mdi-close' variant="tonal" size="large" @click="removeFavorite(favorite)"
            :data-key="favorite.id"></v-btn>
        </div>

      </div>
    </div>
    <div class="removed" v-else>Favorite removed</div>
  </v-card>
</template>


<script setup>

import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/app';
import { supabase } from '@/clients/supabase';

const props = defineProps(['sortedFavoritesData'])

const { currentlyPlaying } = storeToRefs(useAppStore())

let checkKey = ref(0)

const removeFavorite = async (favorite) => {
  const localUser = await supabase.auth.getSession()
  try {
    await supabase
      .from('favorites')
      .update({ is_favorite: !favorite.isFavorite })
      .eq('user_email', localUser.data.session.user.email)
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
  margin: 0 1rem;
}

.v-chip {
  margin-left: 1rem;
}

.favContainer {
  display: flex;
}

.favImage {
  width: 10%;
  margin: 1rem;
}

.favInfo {
  width: 90%;
  display: flex;
}

.actions {
  margin-left: auto;
  display: flex;
}

.text {
  margin: 1rem;
}

.actionButton {
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  margin-right: 0.8rem;
}

.removed {
  padding: 2rem;
}
</style>
