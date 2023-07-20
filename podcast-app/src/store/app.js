// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";
import { trialShowData } from "../trial-data/trial-show";

// export const useAppStore = defineStore('app', {
//   state: () => ({
//     //
//   }),
// })

export const useAppStore = defineStore("app", () => {
  const currentlyPlaying = ref({
    showId: trialShowData.id,
    showTitle: trialShowData.title,
    title: trialShowData.seasons[0].episodes[0].title,
    description: trialShowData.seasons[0].episodes[0].description,
    episode: trialShowData.seasons[0].episodes[0].episode,
    file: trialShowData.seasons[0].episodes[0].file,
    timePlayed: 0,
  });
  return { currentlyPlaying };
});
