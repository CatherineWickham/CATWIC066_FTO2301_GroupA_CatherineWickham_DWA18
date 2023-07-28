<template>
    <v-card>
        <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
        <br><br>
        <v-card-title>Page Loading</v-card-title>
        <v-card-subtitle>If the content does not load within a few
            minutes, please refresh
        </v-card-subtitle>
    </v-card>
</template>

<style scoped>
.v-card {
    padding: 3.5rem 6rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
}

.v-progress-circular {
    justify-self: center;
}
</style>