<template>
  <v-container v-if="favoritesDataReady">
    <FavoritesList :favoritesData="favoritesData"></FavoritesList>
  </v-container>
  <div v-else>Loading</div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import FavoritesList from '@/components/FavoritesList.vue'
import { supabase } from '@/clients/supabase';

// import { trialShowData } from '../trial-data/trial-show'
// const showData = reactive(trialShowData)

let favoritesDataReady = ref(false) // remember to change back to false default

let favoritesData = reactive([])

const fetchFavoritesData = async () => {
  try {
    let favoritesInfo = []
    let { data } = await supabase
      .from('favorites')
      .select('*')
    for (const item of data) {
      favoritesInfo.push({
        id: item.id,
        showId: item.showId,
        showTitle: item.show_name,
        season: item.season,
        dateAdded: item.date_added,
        lastUpdated: item.last_updated,
        episode: item.episode,
        episodeTitle: item.episode_title,
        episodeDescription: item.episode_description,
        image: item.season_image,
        isFavorite: true,
      })
    }
    favoritesData = favoritesInfo
    favoritesDataReady.value = true
  } catch (error) {
    console.error(error);
  }
};

fetchFavoritesData()

</script>

<style scoped>
.v-container {
  justify-content: center;
}
</style>