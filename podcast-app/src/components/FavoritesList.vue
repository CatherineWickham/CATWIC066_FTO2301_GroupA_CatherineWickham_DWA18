<template>
  <v-card width="100%" class="favContainer" v-for="favorite in props.favoritesData" :key="favorite.id">
    <div class="favImage">
      <v-img :src="favorite.image" height="100%" cover></v-img>
    </div>
    <div class="favInfo">
      <v-card-title>
        <v-icon v-if="favorite.isFavorite" icon='mdi-heart' />
        <v-icon v-else icon='mdi-heart-outline' />
        {{ favorite.episodeTitle }}
      </v-card-title>
      <v-card-subtitle>{{ favorite.showTitle + ' - Season ' + favorite.season }}</v-card-subtitle>
      <v-card-text>{{ favorite.episodeDescription }}</v-card-text>
    </div>
  </v-card>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/app';

const props = defineProps(['favoritesData'])


// const { currentlyPlaying } = storeToRefs(useAppStore())

// const episodeSelectedHandler = (event) => {

//   const currentEpisode = event.target.closest('[data-episode]').dataset.episode
//   const currentSeason = event.target.closest('[data-season]').dataset.season

//   currentlyPlaying.value.showId = props.showData.id
//   currentlyPlaying.value.showTitle = props.showData.title
//   currentlyPlaying.value.episodeTitle = props.showData.seasons[currentSeason - 1].episodes[currentEpisode - 1].title
//   currentlyPlaying.value.episode = currentEpisode
//   currentlyPlaying.value.file = props.showData.seasons[currentSeason - 1].episodes[currentEpisode - 1].file
//   currentlyPlaying.value.timePlayed = props.showData.seasons[currentSeason - 1].episodes[currentEpisode - 1].timePlayed || 0

//   return currentlyPlaying.value
// }

</script>

<style scoped>
.favContainer {
  display: flex;
  margin: 1rem;
}

.favImage {
  flex: 1;
  margin: 1rem;
}

.favInfo {
  flex: 5
}
</style>
