<template>
  <div class="welcome-container min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center w-full">
    <h1 class="custom-heading text-5xl font-bold mb-8 text-center">
      {{ homeData.title }}
    </h1>

    <!-- Profile Picture -->
    <img :src="profileImg" alt="Troy's Picture" class="w-48 h-48 rounded-full shadow-lg mb-4" />

    <!-- Email and Address Section -->
    <p class="text-lg mb-1">Age: {{ homeData.age }}</p>
    <p class="text-lg mb-4 text-center">
      {{ homeData.address }}
    </p>

    <!-- Social Links Section -->
    <div class="social-links flex space-x-4 mt-4">
      <a href="https://www.linkedin.com/in/troy-pardillo-65a0a3309/" target="_blank" class="social-icon">
        <img src="@/assets/linkedin-icon.png" alt="LinkedIn" class="w-8 h-8" />
      </a>
      <a href="https://github.com/troy0323" target="_blank" class="social-icon">
        <img src="@/assets/github-icon.png" alt="GitHub" class="w-8 h-8" />
      </a>
      <a href="https://www.facebook.com/Troyxcz" target="_blank" class="social-icon">
        <img src="@/assets/facebook-icon.png" alt="Facebook" class="w-8 h-8" />
      </a>
    </div>
  </div>
</template>

<script setup>
import profileImg from '@/assets/profile.jpg'; // Your profile picture
import { useMainStore } from '@/stores/useMainStore'; // Import the store
import { computed } from 'vue';

// Access the store
const store = useMainStore();

// Create a computed property for home data
const homeData = computed(() => store.home);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap'); /* Importing the Poppins font */

.custom-heading {
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
}

p {
  font-family: Arial, sans-serif;
  color: #cccccc;
}

.social-links {
  display: flex;
  justify-content: center;
}

.social-icon img {
  width: 32px;
  height: 32px;
  margin: 0 8px;
}

.social-icon:hover img {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}
</style>
