<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue';
import { useCounterStore } from '../stores/counter';

const counter = useCounterStore();
</script>

<template>
  <div>
    <HelloWorld msg="Vite + Vue" />
    <div>
      <p>Current Pinia Count: {{ counter.count }}</p>
      <button type="button" @click="counter.increment">+ Increment</button>
      <button type="button" @click="counter.decrement">- Decrement</button>
    </div>
    <div
      style="
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: center;
      "
    >
      <router-link to="/about">Go to About</router-link>
      <router-link to="/auth">Go to Auth</router-link>
      <router-link to="/dynamic-route/1">Go to Dynamic Route</router-link>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
