<template>
  <v-toolbar>
    <v-toolbar-title class="toolbarTitle">My Favorites</v-toolbar-title>
    <v-form @submit="handleFiltersSubmit">
      <v-select class="formItem" v-model="selectedSortType" label="Sort By" :items="sortTypesArray">
      </v-select>
      <v-btn class="formItem" type="submit" variant="outlined">Apply Filters</v-btn>
    </v-form>
  </v-toolbar>
</template>

<script setup>
import { ref } from 'vue'

let sortTypesArray = ["Unsorted", "Alphabetical (A to Z)", "Alphabetical (Z to A)", "By earliest date updated", "By latest date updated"]
let selectedSortType = ref("Unsorted")

const emit = defineEmits(['filtersApplied'])

const handleFiltersSubmit = (event) => {
  event.preventDefault()
  const filters = {
    sortType: selectedSortType.value,
  }
  emit('filtersApplied', filters)
}

</script>

<style scoped>
.v-toolbar {
  margin-top: 1rem;
}

.v-form {
  display: flex;
  width: 80%;
  align-items: center;
}

.formItem {
  margin: 0 1rem;
  width: 30%;
}

.formInputs {
  margin: 0 1rem;
  width: 30%;
}
</style>
