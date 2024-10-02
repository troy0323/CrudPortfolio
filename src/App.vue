<template>
  <div>
    <navbar />
    <transition
      enter-active-class="transition-opacity duration-500"
      leave-active-class="transition-opacity duration-500"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import navbar from '@/components/NavBar.vue';

export default {
  components: {
    navbar
  }
};
</script>