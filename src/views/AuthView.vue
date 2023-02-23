<script setup lang="ts">
import { signInWithPopup, GoogleAuthProvider } from '@firebase/auth';
import { useCurrentUser } from 'vuefire';
import { auth } from '../lib/firebase';

const signIn = () => {
  signInWithPopup(auth, new GoogleAuthProvider());
};

const signOut = () => {
  auth.signOut();
};

const user = useCurrentUser();
</script>

<template>
  <div>
    <h1>Auth</h1>
    <p>This is an Auth page using Firebase.</p>
    <div v-if="user">
      <img :src="user.photoURL ? user.photoURL : ''" alt="Profile Image" />
      <p>Current User: {{ user.displayName }}</p>
      <button @click="signOut">Sign Out</button>
    </div>
    <div v-else>
      <button @click="signIn">Sign In</button>
    </div>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>
