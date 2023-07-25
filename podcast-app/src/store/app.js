// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";
// import { trialShowData } from "../trial-data/trial-show";

export const useAppStore = defineStore("app", () => {
  const currentlyPlaying = ref({
    showId: null,
    showTitle: null,
    episodeTitle: null,
    episode: null,
    file: null,
    timePlayed: 0,
  });

  const favorites = ref([
    {
      showId: "10716",
      showTitle: "Something Was Wrong",
      season: 1,
      episode: 1,
      episodeTitle: "There Were No Red Flags",
      file: "https://podcast-api.netlify.app/placeholder-audio.mp3",
    },
  ]);

  const listenHistory = ref([]);

  const currentShowId = ref(null);

  const userActivity = ref({
    user_email: "catherine@fake.com",
    podcast_id: 123,
    season: 3,
    episode: 1,
    time_stamp: 12345,
  });

  return { currentlyPlaying, listenHistory, currentShowId, userActivity };
});
