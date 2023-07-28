<template>
  <v-sheet class="audioContainer">
    <audio controls @loadstart="setTimePlayed" @pause="getTimePlayed" @play="toggleIsPlaying" :src="currentlyPlaying.file"
      :key="audioKey">
    </audio>
    <div class="playingInfo">
      <h4>{{ currentlyPlaying.episodeTitle }}</h4>
      <h5>{{ currentlyPlaying.showTitle }}</h5>
    </div>
  </v-sheet>
</template>

<script setup>
import { storeToRefs, } from 'pinia';
import { useAppStore } from '@/store/app';
import { supabase } from '@/clients/supabase';

const { currentlyPlaying } = storeToRefs(useAppStore())

let audioKey = 0

const setTimePlayed = (event) => {
  event.target.currentTime = currentlyPlaying.value.timePlayed
  audioKey++
}

const getTimePlayed = async (event) => {
  const timePlayed = event.target.currentTime
  currentlyPlaying.value.timePlayed = Math.floor(timePlayed)
  const localUser = await supabase.auth.getSession()
  await supabase
    .from('favorites')
    .update({ time_played: currentlyPlaying.value.timePlayed })
    .eq('user_email', localUser.data.session.user.email)
    .eq('showId', currentlyPlaying.value.showId)
    .eq('season', currentlyPlaying.value.season)
    .eq('episode', currentlyPlaying.value.episode);
}
</script>

<style scoped>
.audioContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 0.8rem;
  margin-top: 2rem;
  position: fixed;
  bottom: 0px;
  border-top: solid 1px rgb(66, 66, 66);
}

audio {
  width: 50%;
}

.playingInfo {
  text-align: center;
  margin: 0.8rem;
}
</style>