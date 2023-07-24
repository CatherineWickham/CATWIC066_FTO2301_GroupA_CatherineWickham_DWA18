<template>
  <router-view />
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  import { useAppStore } from '@/store/app';
  import { supabase } from "@/clients/supabase";
  import { onMounted, onBeforeUnmount } from 'vue'

  const { userActivity } = storeToRefs(useAppStore())

  async function insertData() {
      try {
        const { data, error } = await supabase
          .from('user_activity') // Replace 'your_table_name' with the actual name of your table
          .insert({
            user_email: userActivity.email,
            podcast_id: userActivity.podcast_id,
            season: userActivity.season,
            episode: userActivity.episode,
            timestamp: userActivity.timestamp,
          });
        
        if (error) {
          console.error('Error inserting data:', error.message);
        } else {
          console.log('Data inserted successfully:', data);
        }
      } catch (error) {
        console.error('Error inserting data:', error.message);
      }
    }

  onMounted(() => {
    console.log(`the component is now mounted.`)
  })

  onBeforeUnmount(() => {
      alert(`the component is being unmounted`)
  })


</script>
