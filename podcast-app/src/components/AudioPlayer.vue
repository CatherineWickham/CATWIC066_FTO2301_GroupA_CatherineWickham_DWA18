<template>
    <v-sheet class="audioContainer">
        <audio controls @loadstart="setTimePlayed" @pause="getTimePlayed" :src="currentlyPlaying.file"></audio>
        <div class="playingInfo">
            <h4>{{ currentlyPlaying.episodeTitle }}</h4>
            <h5>{{ currentlyPlaying.showTitle }}</h5>
        </div>
    </v-sheet>
  </template>

<script setup>
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/app';

const { currentlyPlaying } = storeToRefs(useAppStore())
// let { file, episodeTitle, showTitle } = currentlyPlaying.value NO DESTRUCTURING!

const startTime = currentlyPlaying.value.timePlayed

const setTimePlayed = (event) => {
    event.target.currentTime = startTime
}

const getTimePlayed = (event) => {
    const timePlayed = event.target.currentTime
    currentlyPlaying.value.timePlayed = Math.floor(timePlayed)
    console.log(currentlyPlaying.value)
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
    position:fixed;
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