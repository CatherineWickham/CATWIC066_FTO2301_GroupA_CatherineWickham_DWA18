<template>

<v-card 
width="100%"
class="seasonContainer"
v-for="season in seasonsArray"
:key="season.season"
>
<div class="seasonInfo">
  <img
    :src="season.image"
    height="100"
  >
  <v-card-title>Season {{ season.season }}</v-card-title>
  <v-chip>{{ season.episodes.length }} EPISODES</v-chip>
</div>

  <v-expansion-panels variant="accordion" max-width>
      <v-expansion-panel
        v-for="episode in season.episodes" 
        :key="episode.episode"
      > 
        <v-expansion-panel-title>
          <v-icon icon="mdi-heart-outline"/>
          <v-chip class="episodeChip">EPISODE {{ episode.episode }}</v-chip>
          {{ episode.title }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="episodePanel">
            <div>
            {{ episode.description }}
            </div>
            <div class="episodePanelButton">
              <v-btn  
              icon="mdi-play"
              size="large"
              color="green"
              @click="episodeSelectedHandler"
              :data-episode="[episode.episode]"
              :data-season="[season.season]"
              ></v-btn>
            </div>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
</v-card>


</template>

<script setup>
  import { reactive } from 'vue'
  import { storeToRefs } from 'pinia';
  import { useAppStore } from '@/store/app';

  const props = defineProps(['showData'])
  const seasonsArray = reactive(props.showData.seasons)

  const { currentlyPlaying } = storeToRefs(useAppStore())

  const episodeSelectedHandler = (event) => {
    

    const currentEpisode = event.target.closest('[data-episode]').dataset.episode
    const currentSeason = event.target.closest('[data-season]').dataset.season

    currentlyPlaying.value.showId = props.showData.id
    currentlyPlaying.value.showTitle = props.showData.title
    currentlyPlaying.value.episodeTitle = props.showData.seasons[currentSeason-1].episodes[currentEpisode-1].title
    currentlyPlaying.value.episode = currentEpisode
    currentlyPlaying.value.file = props.showData.seasons[currentSeason-1].episodes[currentEpisode-1].file
    currentlyPlaying.value.timePlayed = props.showData.seasons[currentSeason-1].episodes[currentEpisode-1].timePlayed || 0

    return currentlyPlaying.value
  }

</script>

<style scoped>
.v-card-subtitle{
  margin-bottom: 0.8rem;
}
.seasonContainer {
  display: flex;
  margin: 2rem;
}
img {
  margin: 1rem;
}
.seasonInfo {
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
}
.episodeChip{
  margin-left: 2rem;
  margin-right: 2rem;
}
.episodePanel {
  display: flex;
  align-items: center;
}
.episodePanelButton {
  margin-left: 24px;
}
</style>
