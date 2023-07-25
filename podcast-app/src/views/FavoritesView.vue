<template>
  <v-container fluid class="fill-height" v-if="favoritesDataReady">
    <FilterToolbar @sortTypeSelected="handleSortTypeSelect" />
    <FavoritesList :favoritesData="favoritesData"></FavoritesList>
    <div class="bottomSpacer"></div>
  </v-container>
  <div v-else>Loading</div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import FavoritesList from '@/components/FavoritesList.vue'
import FilterToolbar from '@/components/FilterToolbar.vue'
import { supabase } from '@/clients/supabase';

const handleSortTypeSelect = (event) => {
  console.log(event.detail)
}

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

.bottomSpacer {
  height: 20vh;
}
</style>