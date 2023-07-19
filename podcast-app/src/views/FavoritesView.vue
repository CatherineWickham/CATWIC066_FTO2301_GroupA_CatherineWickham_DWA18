<template>
  <h1>Favorites Page</h1>
  <PreviewCards />
</template>

<script setup>
  import PreviewCards from '@/components/PreviewCards.vue'


</script>

<!-- import { supabase } from '@/clients/supabase';
import { ref } from 'vue'

const account = ref()

const getSession = async () => {
  account.value = await supabase.auth.getSession()
}

getSession() -->

<!-- <h1>Favorites Page {{ account !== undefined ? `for
  ${account.data.session.user.email}` : ""}}</h1> -->