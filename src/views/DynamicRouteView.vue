<script setup lang="ts"></script>

<template>
  <div>
    <h1>Dynamic Route</h1>
    <p>This is a dynamic route page.</p>
    <div>The ID is: {{ $route.params.id }}</div>
    <div
      style="
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: center;
      "
    >
      <router-link :to="`/dynamic-route/${Number($route.params.id) - 1}`"
        >Previous</router-link
      >
      <router-link to="/">Home</router-link>
      <router-link :to="`/dynamic-route/${Number($route.params.id) + 1}`"
        >Next</router-link
      >
    </div>
  </div>
</template>
