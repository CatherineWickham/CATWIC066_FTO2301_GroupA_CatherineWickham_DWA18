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

  // import { trialShowData } from '../trial-data/trial-show'
  // const showData = reactive(trialShowData)

  let showDataReady = ref(false) // remember to change back to false default
  
  const { currentShowId } = storeToRefs(useAppStore())
  
  let showData = reactive({})

  const fetchShowData = async () => {
  try {
    if (currentShowId.value) {
      const URL = `https://podcast-api.netlify.app/id/${currentShowId.value}`;
      const res = await fetch(URL);
      showData = await res.json();
      showDataReady.value = true
      return { showData };
    }
    return
  } catch (error) {
    console.error(error);
  }
  };
  fetchShowData()

</script>

<style scoped>
.v-container{
  justify-content: center;
}
</style>