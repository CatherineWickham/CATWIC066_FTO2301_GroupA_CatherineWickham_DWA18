<template>
  <v-container v-if="showDataReady" class="fill-height">
    <ShowHero :showData="showData"></ShowHero>
    <SeasonPreviewsList :showData="showData"></SeasonPreviewsList>
  </v-container>
  <div v-else>Loading</div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/app';
import ShowHero from '@/components/ShowHero.vue'
import SeasonPreviewsList from '@/components/SeasonPreviewsList.vue'
import { supabase } from '@/clients/supabase';

// import { trialShowData } from '../trial-data/trial-show'
// const showData = reactive(trialShowData)

let showDataReady = ref(false) // remember to change back to false default

const { currentShowId } = storeToRefs(useAppStore())

let showData = reactive({})

//ORIGINAL, NO FAV DATA
// const fetchShowData = async () => {
// try {
//   if (currentShowId.value) {
//     const URL = `https://podcast-api.netlify.app/id/${currentShowId.value}`;
//     const res = await fetch(URL);
//     showData = await res.json();
//     showDataReady.value = true
//     return { showData };
//   }
//   return
// } catch (error) {
//   console.error(error);
// }
// };

// WITH FAV DATA, SINGLE DB CALLS
// const fetchShowData = async () => {
//   try {
//     if (currentShowId.value) {
//       const URL = `https://podcast-api.netlify.app/id/${currentShowId.value}`;
//       const res = await fetch(URL);
//       let transformedShowData = await res.json();

//       // Loop through seasons and episodes to check if each episode is favorited
//       for (const season of transformedShowData.seasons) {
//         for (const episode of season.episodes) {
//           console.log(episode)
//           let { data, error } = await supabase
//             .from('favorites')
//             .select('id')
//             .eq('showId', currentShowId.value)
//             .eq('season', season.season)
//             .eq('episode', episode.episode);
//           if (data.length > 0) {
//             episode.isFavorite = true
//           } else {
//             episode.isFavorite = false
//           }
//         }
//       }
//       console.log(transformedShowData)
//       showData = transformedShowData
//       showDataReady.value = true
//       return { showData }
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

const fetchShowData = async () => {
  try {
    if (currentShowId.value) {
      const URL = `https://podcast-api.netlify.app/id/${currentShowId.value}`;
      const res = await fetch(URL);
      let transformedShowData = await res.json();

      // Collect all the episodes to check if they are favorites
      const episodesToCheck = [];
      for (const season of transformedShowData.seasons) {
        for (const episode of season.episodes) {
          episodesToCheck.push({
            showId: currentShowId.value,
            season: season.season,
            episode: episode.episode,
            title: episode.title,
            description: episode.description, // Preserve the original description
          });
        }
      }

      // Fetch favorites for all episodes in parallel
      const favoritePromises = episodesToCheck.map(({ showId, season, episode }) => {
        return supabase
          .from('favorites')
          .select('id')
          .eq('showId', showId)
          .eq('season', season)
          .eq('episode', episode);
      });

      const favoritesResponses = await Promise.all(favoritePromises);

      // Update isFavorite flag for each episode
      for (let i = 0; i < episodesToCheck.length; i++) {
        const { data } = favoritesResponses[i];
        const episode = episodesToCheck[i];
        episode.isFavorite = data.length > 0;
      }

      // Replace episodes with updated episodes in their respective seasons
      for (const season of transformedShowData.seasons) {
        season.episodes = episodesToCheck
          .filter((episode) => episode.season === season.season)
          .map((episode) => ({
            title: episode.title,
            description: episode.description, // Preserve the original description
            episode: episode.episode,
            file: episode.file,
            isFavorite: episode.isFavorite,
          }));
      }

      showData = transformedShowData;
      showDataReady.value = true;
      return { showData };
    }
  } catch (error) {
    console.error(error);
  }
};

fetchShowData()

</script>

<style scoped>
.v-container {
  justify-content: center;
}
</style>