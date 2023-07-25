<template>
  <v-toolbar title="Filter Results">
    <v-spacer></v-spacer>
    <v-select @update:menu="$emit('sortTypeSelected', selectedSortType)" v-model="selectedSortType" label="Sort By"
      :items="sortTypesArray"></v-select>
    <v-select @update:menu="handleGenreSelect" v-model="selectedGenre" label="Select
    Genre" :items="genresArray"></v-select>
    <v-text-field v-model="filterString" label="Title"></v-text-field>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script setup>
import { ref } from 'vue'

let sortTypesArray = ["Unsorted", "Alphabetical (A to Z)", "Alphabetical (Z to A)", "By earliest date updated", "By latest date updated"]
let genresArray = [
  "All Genres",
  "Personal Growth",
  "True Crime and Investigative Journalism",
  "History",
  "Comedy",
  "Entertainment",
  "Business",
  "Fiction",
  "News",
  "Kids and Family",
]

let selectedSortType = ref("Unsorted")
let selectedGenre = ref("All Genres")
let filterString = ref("")

// const handleSortTypeSelect = () => {
//   console.log(selectedSortType.value)

const handleGenreSelect = () => {
  console.log(selectedGenre.value)
}

</script>

<style scoped>
.v-toolbar {
  margin-top: 1rem;
}
</style>