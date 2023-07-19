<template>
    <div class="audioContainer">
        <audio controls @pause="getTimePlayed" @ended="handleEnded" src="https://podcast-api.netlify.app/placeholder-audio.mp3"></audio>
        <div class="playingInfo">
            <h3>Episode title</h3>
            <h4>Show title</h4>
        </div>
    </div>
  </template>

<script setup>

const getTimePlayed = (event) => {
    const timePlayed = event.target.currentTime
    console.log(timePlayed)
}

const handleEnded = () => {
    console.log('ended')
}

</script>

<style scoped>
.audioContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
}

audio {
    width: 50%;
}

.playingInfo {
    text-align: center;
}
</style>


<!-- HTMLMediaElement.currentSrc  -->
<!-- HTMLMediaElement.ended -->
<!-- HTMLMediaElement.audioTracks -->
<!-- Add and remove track event listeners -->

<!-- Ending & changing view is the same as pausing -->