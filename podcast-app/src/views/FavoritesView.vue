<template>
  <FavoritesToolbar class="toolbar" @filtersApplied="handlefiltersApplied" />
  <v-btn class="backButton" variant="tonal" append-icon="mdi-arrow-u-left-bottom"><router-link to="/browse">Back to
      Browse</router-link></v-btn>
  <v-container fluid class="fill-height" v-if="favoritesDataReady">
    <FavoritesList :sortedFavoritesData="sortedFavoritesData"></FavoritesList>
    <div class="bottomSpacer"></div>
  </v-container>
  <v-container v-else class="loadingContainer">
    <LoadingIndicator />
  </v-container>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import FavoritesList from '@/components/FavoritesList.vue'
import { supabase } from '@/clients/supabase';
import LoadingIndicator from '@/components/LoadingIndicator.vue'
import FavoritesToolbar from '@/components/FavoritesToolbar.vue'

let favoritesDataReady = ref(false) // remember to change back to false default

let favoritesData = reactive([])

const fetchFavoritesData = async () => {
  const localUser = await supabase.auth.getSession()
  try {
    let favoritesArray = []
    let { data } = await supabase
      .from('favorites')
      .select('*')
      .eq('user_email', localUser.data.session.user.email)
      .eq('is_favorite', true)
    for (const item of data) {
      favoritesArray.push({
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
        timePlayed: item.time_played,
        file: item.file,
        isFavorite: true,
      })
    }
    favoritesData.value = favoritesArray
    favoritesDataReady.value = true
  } catch (error) {
    console.error(error);
  }
};

fetchFavoritesData()

let sortMethod = ref("Unsorted")

const handlefiltersApplied = (filters) => {
  const { sortType } = filters
  sortMethod.value = sortType
}

const sortedFavoritesData = computed(() => {
  let sortedFavorites = [...favoritesData.value];

  if (sortMethod.value === "Alphabetical (A to Z)") {
    sortedFavorites.sort((a, b) => {
      let fa = a.showTitle.toLowerCase();
      let fb = b.showTitle.toLowerCase();
      if (fa < fb) {
        return -1;
      } else if (fa > fb) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  else if (sortMethod.value === "Alphabetical (Z to A)") {
    sortedFavorites.sort((a, b) => {
      let fa = a.showTitle.toLowerCase();
      let fb = b.showTitle.toLowerCase();
      if (fa > fb) {
        return -1;
      } else if (fa < fb) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  else if (sortMethod.value === "Date updated (latest first)") {
    sortedFavorites.sort((a, b) => (new Date(b.lastUpdated
    )).getTime() - (new Date(a.lastUpdated
    )).getTime());
  }
  else if (sortMethod.value === "Date updated (earliest first)") {
    sortedFavorites.sort((a, b) => (new Date(a.lastUpdated
    )).getTime() - (new Date(b.lastUpdated
    )).getTime());
  }

  return sortedFavorites;
}
);

</script>

<style scoped>
.v-container {
  justify-content: center;
}

.bottomSpacer {
  height: 20vh;
}

a {
  text-decoration: none;
  color: white
}

.backButton {
  margin-top: 2rem;
  margin-left: 2rem;
}
</style>