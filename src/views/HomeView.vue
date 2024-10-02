<script setup>
import Home from '../components/Home.vue'
import NavBar from '../components/NavBar.vue'
</script>

<template>
  <main class="text-white">
    <Home />
    <NavBar />
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
}
</style>
