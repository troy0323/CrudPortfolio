<script setup>
import Profile from '../components/Profile.vue'
import NavBar from '../components/NavBar.vue'
</script>

<template>
  <main class="text-white">
    <Profile />
    <NavBar/>
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


