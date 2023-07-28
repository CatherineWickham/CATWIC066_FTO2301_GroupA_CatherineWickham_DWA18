<template>
  <v-toolbar>
    <v-spacer></v-spacer>
    <v-form @submit="handleFiltersSubmit">
      <v-select class="formItem" v-model="selectedSortType" label="Sort By" :items="sortTypesArray">
      </v-select>
      <v-btn class="formItem" type="submit" variant="outlined">Apply Filters</v-btn>
    </v-form>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script setup>
import { ref } from 'vue'

let sortTypesArray = ["Unsorted", "Alphabetical (A to Z)", "Alphabetical (Z to A)", "Date updated (earliest first)", "Date updated (latest first)"]
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
  background-color: rgb(18, 18, 18);
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

.v-form {
  display: flex;
  width: 60%;
  align-items: center;
}

.formItem {
  margin: 0 1rem;
  width: 50%;
}

.formInputs {
  margin: 0 1rem;
  width: 10%;
}
</style>
