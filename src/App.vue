<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <v-app>
    <RouterView />
  </v-app>
</template>

<style>
* {
}
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
