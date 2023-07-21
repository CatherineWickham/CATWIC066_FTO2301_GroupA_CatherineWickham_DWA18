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
          <v-btn 
            class="episodeButton" 
            prepend-icon="mdi-play"
            @click={episodeSelectedHandler}
            :season="season.season"
            :episode="season.season.episode"
          >
          EPISODE {{ episode.episode }}
          </v-btn>
          {{ episode.title }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          {{ episode.description }}</v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
</v-card>


</template>

<script setup>
  import { reactive } from 'vue'
  const props = defineProps(['showData'])
  const seasonsArray = reactive(props.showData.seasons)

  const episodeSelectedHandler = () => {
    console.log("Episode clicked")
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
.episodeButton{
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>
