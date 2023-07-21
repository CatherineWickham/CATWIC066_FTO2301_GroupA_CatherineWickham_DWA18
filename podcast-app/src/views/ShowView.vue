<template>
  <v-container v-if="showDataReady" class="fill-height">
    <ShowHero></ShowHero>
  </v-container>
  <div v-else>Loading</div>
</template>

<script setup>
  import { ref } from 'vue'
  import ShowHero from '@/components/ShowHero.vue'

  let showDataReady = ref(true) // remeber to change back to false as default
  // let showData = reactive([])

</script>
