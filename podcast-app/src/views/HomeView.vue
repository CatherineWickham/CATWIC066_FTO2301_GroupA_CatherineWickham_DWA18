<template>
  <div class="welcomeBanner">
    <img cover class="blackLogo" src="../assets/poddle_logo_black.png" />
    <h1>Welcome to Poddle!</h1>
    <h2>Splash into a world of podcasts</h2>
    <br><br>
    <v-item-group>
      <v-btn @click="signupDialog = true">Sign Up</v-btn>
    </v-item-group>
  </div>

  <v-dialog v-model="signupDialog" width="50%">
    <v-card>
      <v-card-title>Create Poddle Account</v-card-title>
      <form @submit.prevent="submit">

        <v-text-field v-model="name.value.value" :counter="1" :error-messages="name.errorMessage.value"
          label="Name"></v-text-field>

        <v-text-field v-model="phone.value.value" :counter="7" :error-messages="phone.errorMessage.value"
          label="Phone Number"></v-text-field>

        <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
          label="E-mail"></v-text-field>

        <v-text-field v-model="password.value.value" :counter="10" :error-messages="password.errorMessage.value"
          label="Password"></v-text-field>

        <v-btn class="me-4" @click="signupDialog = false">Cancel</v-btn>
        <v-btn class="me-4" color="primary" type="submit" @click="signupDialog = false">Sign Up</v-btn>
      </form>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import { supabase } from '../clients/supabase'
// import RecommendedCarousel from '@/components/RecommendedCarousel.vue';

let signupDialog = ref(false)

const { handleSubmit } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 1) return true

      return 'Name needs to be at least 1 character.'
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true

      return 'Phone number needs to be at least 9 digits.'
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Must be a valid e-mail.'
    },
    password(value) {
      if (value?.length >= 10) return true

      return 'Password needs to be at least 10 characters.'
    },
  },
})
const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const password = useField('password')

const submit = handleSubmit(async (values) => {
  const { data, error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      data: {
        name: values.name,
        phone: values.phone,
      }
    }
  })
  if (error) {
    console.log(error)
  } else {
    console.log(data)
  }
})
</script>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 2rem;
}

.v-card {
  padding: 3rem;
}

.welcomeBanner {
  background-image: url("https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
  background-size: cover;
  padding: 10rem;
  padding-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: black;
}

h1 {
  font-size: 3rem;
  font-weight: 900;
  margin: 1.2rem;
  padding: 0;
}

main {
  --v-layout-top: 0px;
}

.blackLogo {
  height: 30%;
  width: auto;
}
</style>
