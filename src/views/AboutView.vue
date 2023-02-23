<script setup lang="ts">
import { useCounterStore } from '../stores/counter';

const counter = useCounterStore();

// counter.count++;
// counter.$patch({ count: counter.count + 1 });
// counter.increment();
</script>

<template>
  <div>
    <h1>About</h1>
    <p>This is an about page.</p>
    <div>
      <p>Current Pinia Count: {{ counter.count }}</p>
      <button type="button" @click="counter.increment">+ Increment</button>
      <button type="button" @click="counter.decrement">- Decrement</button>
    </div>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>
