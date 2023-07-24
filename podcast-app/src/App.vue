<template>
  <router-view/>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  import { useAppStore } from '@/store/app';
  import { supabase } from "@/clients/supabase";
  import { onMounted, onBeforeUnmount } from 'vue'

  const { userActivity } = storeToRefs(useAppStore())

  async function insertData( userActivity ) {
    const { user_email, podcast_id, season, episode, time_stamp } = userActivity._value
      try {
        const { data, error } = await supabase
          .from('user_activity') 
          .insert([{
            user_email: user_email,
            podcast_id: podcast_id,
            season: season,
            episode: episode,
            time_stamp: time_stamp,
          }]);
        
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
      insertData(userActivity)
  })


</script>

<!-- 
// Get everything from the notes table
let { data: notes, error } = await supabase
    .from('notes')
    .select('*')

// Just return the date and note columns of every note 
let { data: notes, error } = await supabase
    .from('notes')
    .select('date, note') -->

    <!-- We can use eq() to find a record which matches a value:

    let id = "some_id_we_are_curious_about";
    let { data: notes, error } = await supabase
    .from('notes')
    .select('date, note')
    .eq('id', id) 
  -->


    <!-- 
    .eq('column', 'Equal to')
    .gt('column', 'Greater than')
    .lt('column', 'Less than')
    .gte('column', 'Greater than or equal to')
    .lte('column', 'Less than or equal to')
    .like('column', '%CaseSensitive%')
    .ilike('column', '%CaseInsensitive%')
    .is('column', null)
    .in('column', ['Array', 'Values'])
    .neq('column', 'Not equal to') 
  -->