<template>
  <v-container v-if="appReady" fluid class="fill-height">
    <h2 style="text-align: center">You may be interested in...</h2>
    <RecommendedCarousel :recommended="recommendedArray" />
    <FilterToolbar @filtersApplied="handlefiltersApplied" />


    <PreviewCard v-for="(preview) in sortedPreviewData" :key="preview.item.id" :id="preview.item.id"
      :title="preview.item.title" :seasons="preview.item.seasons" :description="preview.item.description"
      :image="preview.item.image" :genres="preview.item.genres" :updated="preview.item.updated">
    </PreviewCard>

  </v-container>
  <v-container v-else class="loadingContainer">
    <LoadingIndicator />
  </v-container>
</template>

<script setup>
import PreviewCard from '@/components/PreviewCard.vue'
import FilterToolbar from '@/components/FilterToolbar.vue'
import RecommendedCarousel from '@/components/RecommendedCarousel.vue';
import { reactive, ref, computed } from 'vue';
import LoadingIndicator from '@/components/LoadingIndicator.vue'
import { useFuse } from '@vueuse/integrations/useFuse'

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

let sortMethod = ref("Unsorted")
let textFilter = ref("")

const handlefiltersApplied = (filters) => {
  const { sortType, filterString } = filters
  sortMethod.value = sortType
  textFilter.value = filterString
}

const sortedPreviewData = computed(() => {
  let sortedPreviews = [...previewData];

  if (sortMethod.value === "Alphabetical (A to Z)") {
    sortedPreviews.sort((a, b) => {
      let fa = a.title.toLowerCase();
      let fb = b.title.toLowerCase();
      if (fa < fb) {
        return -1;
      } else if (fa > fb) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  else if (sortMethod.value === "Alphabetical (Z to A)") {
    sortedPreviews.sort((a, b) => {
      let fa = a.title.toLowerCase();
      let fb = b.title.toLowerCase();
      if (fa > fb) {
        return -1;
      } else if (fa < fb) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  else if (sortMethod.value === "By earliest date updated") {
    sortedPreviews.sort((a, b) => (new Date(b.updated)).getTime() - (new Date(a.updated)).getTime());
  }
  else if (sortMethod.value === "By latest date updated") {
    sortedPreviews.sort((a, b) => (new Date(a.updated)).getTime() - (new Date(b.updated)).getTime());
  }

  // Fuse.js fuzzy matching
  const options = computed(() => ({
    fuseOptions: {
      keys: ['title'],
      isCaseSensitive: false,
      threshold: 0.4,
    },
    matchAllWhenSearchEmpty: true,
  }))

  const { results } = useFuse(textFilter, sortedPreviews, options)
  if (results && results.value && results.value.length > 0) {
    return results.value;
  }

  // If no results found, return the original sortedPreviews array
  return sortedPreviews;
});

</script>

<style scoped>
.loadingContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>