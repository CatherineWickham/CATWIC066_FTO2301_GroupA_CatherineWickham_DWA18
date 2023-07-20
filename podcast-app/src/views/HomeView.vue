<template>
  <v-container v-if="appReady" fluid class="fill-height">
    <h2 style="text-align: center">You may be interested in...</h2>
    <RecommendedCarousel :recommended="recommendedArray"/>
    <PreviewCard 
      v-for="(preview) in previewData"
      :key="preview.id"
      :id="preview.id"
      :title="preview.title"
      :seasons="preview.seasons"
      :description="preview.description"
      :image="preview.image"
      :genres="preview.genres"
      :updated="preview.updated"
    />
  </v-container>
  <div v-else>Loading</div>
</template>

<script setup>
  import PreviewCard from '@/components/PreviewCard.vue'
  import RecommendedCarousel from '@/components/RecommendedCarousel.vue';
  import { reactive } from 'vue';
  import { ref } from 'vue'

  const getRecommended = (previews) => {
    const recommended = []
    recommended.push(previews[Math.floor((Math.random()*previews.length))])
    recommended.push(previews[Math.floor((Math.random()*previews.length))])
    recommended.push(previews[Math.floor((Math.random()*previews.length))])
    return recommended
  }

  let appReady = ref(false)
  let previewData = reactive([])
  let recommendedArray = reactive([])

  const getPreviewData = async () => {
  try {
    const res = await fetch("https://podcast-api.netlify.app/shows");
    previewData = await res.json();
    recommendedArray = getRecommended(previewData)
    appReady.value = true
    return { previewData, recommendedArray };
  } catch (error) {
    console.error(error);
  }
  };
  getPreviewData()

</script>

<style scoped>

</style>