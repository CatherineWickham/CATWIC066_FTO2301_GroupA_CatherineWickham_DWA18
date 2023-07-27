<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi-gentoo" />
      Poddle
    </v-app-bar-title>
    <nav>

      <div class="buttonWrapper">
        <v-btn variant="tonal" size="small" prepend-icon="mdi-home">
          <router-link to="/">Home</router-link>
        </v-btn>
      </div>

      <div class="buttonWrapper">
        <v-btn variant="tonal" size="small">
          <router-link to="/browse">Browse</router-link>
        </v-btn>
      </div>

      <div class="buttonWrapper">
        <v-btn variant="tonal" size="small" prepend-icon="mdi-account">
          My Account

          <v-menu activator="parent">
            <v-list>
              <v-list-item>
                <v-btn variant="text" block size="small" prepend-icon="mdi-heart">
                  <router-link to="/favorites">Go to my favorites</router-link>
                </v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn @click="clearHistoryDialog = true" variant="text" block size="small"
                  prepend-icon="mdi-delete-sweep">
                  Clear Listening History
                </v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </div>

      <div v-if="isLoggedIn" class="buttonWrapper">
        <v-btn color="primary" variant="tonal" size="small" @click="toggleLoggedIn"><router-link
            to="/">Logout</router-link></v-btn>
      </div>
      <div v-else class="buttonWrapper">
        <v-btn color="primary" variant="tonal" size="small" @click="toggleLoggedIn">Login</v-btn>
      </div>
    </nav>

  </v-app-bar>

  <v-dialog v-model="loginDialog" width="50%">
    <v-card>
      <v-card-title>Log in to Poddle Account</v-card-title>
      <form>
        <v-text-field v-model="loginEmail" label="E-mail"></v-text-field>

        <v-text-field v-model="loginPassword" label="Password"></v-text-field>

        <v-btn class="me-4" @click="loginDialog = false">Cancel</v-btn>
        <v-btn class="me-4" color="primary" @click="login">Login</v-btn>
      </form>
    </v-card>
  </v-dialog>

  <v-dialog class="clearHistoryDialog" v-model="clearHistoryDialog" width="25%">
    <v-card>
      <v-card-title>Confirm clear listening history</v-card-title>
      <v-card-text>This will remove all your favorites and recorded timestamps of any episodes
        you have listened to. Are you sure you want to proceed?</v-card-text>
      <br>
      <v-btn class="dialogButton" @click="clearHistoryDialog = false">Cancel</v-btn>
      <v-btn class="dialogButton" color="primary" @click="clearHistory">Confirm</v-btn>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../../clients/supabase'
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/app';
import { onMounted } from 'vue'

let loginDialog = ref(false)
let loginEmail = ref("");
let loginPassword = ref("");
let isLoggedIn = ref("")
let clearHistoryDialog = ref(false)

const clearHistory = async () => {
  clearHistoryDialog.value = false
  const localUser = await supabase.auth.getSession()
  if (localUser.data.session === null) {
    return
  } else {
    try {
      await supabase
        .from('favorites')
        .delete('*')
        .eq('user_email', localUser.data.session.user.email);
      await supabase
        .from('last_played_tracks')
        .delete('*')
        .eq('user_email', localUser.data.session.user.email);
      clearCurrentlyPlaying()
      console.log("Cleared history")

    } catch (error) {
      console.error('Error clearing history:', error);
    }
  }
}

const getSession = async () => {
  const { data } = await supabase.auth.getSession()
  if (data.session === null) {
    isLoggedIn.value = false
    console.log("logged out")
  } else {
    isLoggedIn.value = true
    console.log("logged in")
  }
}
getSession()

const toggleLoggedIn = async () => {
  loginDialog.value = false
  if (isLoggedIn.value === false) {
    // Login
    loginDialog.value = true
  }

  if (isLoggedIn.value === true) {
    // Logout
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log(error)
    } else {
      alert("Logout successful")
      isLoggedIn.value = false
      uploadLastPlayed()
      clearCurrentlyPlaying()
    }
  }
}

const login = async () => {
  loginDialog.value = false
  const { data, error } = await supabase.auth.signInWithPassword({
    email: loginEmail.value,
    password: loginPassword.value
  })
  if (error) {
    console.log(error)
  } else {
    console.log(data)
    isLoggedIn.value = true
    fetchLastPlayed()
    alert("Login successful")
  }
}

const clearCurrentlyPlaying = () => {
  currentlyPlaying.value = {
    showId: null,
    showTitle: null,
    episodeTitle: null,
    episode: null,
    season: null,
    file: null,
    timePlayed: 0,
  }
}

window.addEventListener("beforeunload", uploadLastPlayed)

const { currentlyPlaying } = storeToRefs(useAppStore())

async function uploadLastPlayed() {
  const localUser = await supabase.auth.getSession();
  if (localUser.data.session === null) {
    return
  } else {
    const lastPlayed = currentlyPlaying.value
    try {
      const { data, error } = await supabase
        .from('last_played_tracks')
        .insert({
          user_email: localUser.data.session.user.email,
          time_added: new Date(),
          showId: lastPlayed.showId,
          show_title: lastPlayed.showTitle,
          episode_title: lastPlayed.episodeTitle,
          episode: lastPlayed.episode,
          season: lastPlayed.season,
          file: lastPlayed.file,
          time_played: lastPlayed.timePlayed,
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
}

async function fetchLastPlayed() {
  const localUser = await supabase.auth.getSession();
  if (localUser.data.session === null) {
    return
  } else {
    const localUser = await supabase.auth.getSession()
    const lastPlayed = currentlyPlaying.value
    try {
      const { data, error } = await supabase
        .from('last_played_tracks')
        .select('*')
        .eq('user_email', localUser.data.session.user.email)
        .order('time_added', { ascending: false })
        .limit(1)
      if (data.length > 0) {
        lastPlayed.showId = data[0].showId
        lastPlayed.showTitle = data[0].show_title
        lastPlayed.episodeTitle = data[0].episode_title
        lastPlayed.episode = data[0].episode
        lastPlayed.season = data[0].season
        lastPlayed.file = data[0].file
        lastPlayed.timePlayed = data[0].time_played
        // console.log('Data fetched successfully:', data)
      } else if (error) {
        console.error('Error fetching data:', error.message);
        return
      }
      else {
        console.log('No data for played tracks')
        return
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
}

onMounted(() => {
  fetchLastPlayed()
})
</script>

<style scoped>
nav {
  display: flex;
}

.buttonWrapper {
  margin: 1rem;
}

a {
  text-decoration: none;
  color: white
}

.form {
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 2rem;
}

.v-card {
  padding: 3rem;
}

.clearHistoryDialog {
  text-align: center;
}

.dialogButton {
  margin: 0.4rem;
}
</style>