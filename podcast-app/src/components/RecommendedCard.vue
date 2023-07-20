<template>
    <v-card
        width="400"
        height="500"
    >   
        <v-card-title>{{ props.showData.title }}</v-card-title>
        <v-chip>{{ props.showData.seasons }} SEASONS</v-chip>
        <v-img
        :src="props.showData.image"
        width="100%"
        cover
        ></v-img>
        
    </v-card>
      </template>
    
    <script setup>
        const props = defineProps(['showData'])
    </script>
    
    <style scoped>
    .v-card {
        text-align: center;
    }
    .v-chip {
        margin-bottom: 0.5rem;
    }
    </style>