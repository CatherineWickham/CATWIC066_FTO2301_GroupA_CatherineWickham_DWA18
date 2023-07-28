<template>
  <v-container>
    <div class="cardContainer">
      <v-card>
        <v-card-title>Unauthorized</v-card-title>
        <v-card-text>
          Sorry, you are not authorized to access this content. Please return to the Home
          Page and log in to view your Favorites
        </v-card-text>
        <v-btn color="purple" variant="elevated" size="large">
          <RouterLink to="/">Home Page</RouterLink>
        </v-btn>
      </v-card>
    </div>

  </v-container>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>


<style scoped>
.v-card {
  width: 50%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.v-btn {
  margin: 1rem;
}

.v-card-title {
  margin: 1rem;
  font-size: 1.6rem;
}

.cardContainer {
  margin-top: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  text-decoration: none;
  color: white
}
</style>