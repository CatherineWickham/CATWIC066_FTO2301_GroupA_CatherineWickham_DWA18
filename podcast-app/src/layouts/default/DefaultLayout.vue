<template>
  <v-app>
    <default-bar />
    <default-view />
    <default-footer style="border-top: 1px solid rgb(58, 58, 58);"/>
  </v-app>
</template>

<script setup>
  import DefaultFooter from './AppFooter.vue'
  import DefaultBar from './AppBar.vue'
  import DefaultView from './MainView.vue'
</script>