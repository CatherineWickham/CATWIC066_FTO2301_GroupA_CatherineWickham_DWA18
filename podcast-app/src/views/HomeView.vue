<template>
  <v-container v-if="appReady" fluid class="fill-height">
    <h2 style="text-align: center">You may be interested in...</h2>
    <RecommendedCarousel :recommended="recommendedArray" />
    <FilterToolbar @sortTypeSelected="handleSortTypeSelect" />
    <PreviewCard v-for="(preview) in previewData" :key="preview.id" :id="preview.id" :title="preview.title"
      :seasons="preview.seasons" :description="preview.description" :image="preview.image" :genres="preview.genres"
      :updated="preview.updated">
    </PreviewCard>
  </v-container>
  <div v-else>Loading</div>
</template>

<script setup>
import PreviewCard from '@/components/PreviewCard.vue'
import FilterToolbar from '@/components/FilterToolbar.vue'
import RecommendedCarousel from '@/components/RecommendedCarousel.vue';
import { reactive, ref } from 'vue';

const getRecommended = (previews) => {
  const recommended = []
  recommended.push(previews[Math.floor((Math.random() * previews.length))])
  recommended.push(previews[Math.floor((Math.random() * previews.length))])
  recommended.push(previews[Math.floor((Math.random() * previews.length))])
  return recommended
}

let appReady = ref(false)
let previewData = reactive([])
let recommendedArray = reactive([])

const fetchPreviewData = async () => {
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
fetchPreviewData()

const handleSortTypeSelect = (event) => {
  console.log(event.detail)
}

</script>

<style scoped></style>

<!-- 
computed: {
	sortedArray() {
		let sortedRecipes = this.recipes;
		
    if (sortMethod == 'alphabetically' {
      sortedRecipes = sortedRecipes.sort((a,b) => {
			let fa = a.title.toLowerCase(), fb = b.title.toLowerCase();
			if (fa < fb) {
				return -1
			}
			if (fa > fb) {
				return 1
			}
			return 0
		})
    } else if (sortMethod == 'cookingTime' {
      sortedRecipes = sortedRecipes.sort((a,b) => {
        return a.cookingTime - b.cookingTime
    })
} -->


<!-- computed: {
  filteredRecipes() {
    let tempRecipes = this.recipes
    
    tempRecipes = tempRecipes.filter((item) => {
      return (item.cookingTime <= this.maxCookingTime)
    })
    
    return tempRecipes;
  }
} -->