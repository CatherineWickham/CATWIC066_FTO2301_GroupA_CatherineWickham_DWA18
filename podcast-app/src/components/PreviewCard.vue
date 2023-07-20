<template>
    <v-card
      width="300"
      height="600"
      @click="clickHandler"
    >    
      <v-img
        :src="image"
        height="50%"
        cover
      ></v-img>

      <v-card-title>
        {{ title }}
      </v-card-title>

      <v-card-subtitle>
        <v-chip>{{ seasons }} SEASONS</v-chip> UPDATED {{updatedDay}}/{{updatedMonth}}/{{updatedYear}}
      </v-card-subtitle>

      <v-card-text class="line-clamp">
        {{ description }}
      </v-card-text>
      <v-chip 
        v-for="(genre, index) in props.genres" 
        :key="index"
        >{{ GENRE_MAP[genre] }}
      </v-chip>
    </v-card>
</template>

<script setup>

  const props = defineProps(['id', 'title', 'description', 'seasons', 'image', 'genres', 'updated'])

  const GENRE_MAP = {
    1: "Personal Growth",
    2: "True Crime and Investigative Journalism",
    3: "History",
    4: "Comedy",
    5: "Entertainment",
    6: "Business",
    7: "Fiction",
    8: "News",
    9: "Kids and Family",
  }

  const updated = new Date(props.updated)
  const updatedDay = updated.getDate().toString().padStart(2, '0')
  const updatedMonth = (updated.getMonth() + 1).toString().padStart(2, '0')
  const updatedYear = updated.getFullYear()

  const clickHandler = () => {
    console.log(props.id)
  }

</script>

<style scoped>
.v-card{
  margin: 1rem;
  text-align: center;
}
.v-chip{
  margin: 0.3em;
}
.updated{
  font-size: 0.8rem;
  margin: 0.6rem;
}
.line-clamp {
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>
