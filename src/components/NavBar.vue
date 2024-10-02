<template>
  <nav class="bg-gray-800 p-4 shadow-md w-full fixed top-0 left-0 z-10">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-white font-bold text-xl">
        Troy Pardillo
      </router-link>
      <div>
        <ul class="flex space-x-6 text-white">
          <li>
            <router-link
              to="/"
              class="hover:text-gray-300 transition duration-200 pb-2"
              :class="{ 'border-b-2 border-blue-500': isActive('/home') }"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              class="hover:text-gray-300 transition duration-200 pb-2"
              :class="{ 'border-b-2 border-blue-500': isActive('/contact') }"
            >
              Contact
            </router-link>
          </li>
          <li>
            <router-link
              to="/myprofile"
              class="hover:text-gray-300 transition duration-200 pb-2"
              :class="{ 'border-b-2 border-blue-500': isActive('/myprofile') }"
            >
              Resume
            </router-link>
          </li>
          <li>
            <router-link
              to="/admin"
              class="hover:text-gray-300 transition duration-200 pb-2"
              :class="{ 'border-b-2 border-blue-500': isActive('/admin') }"
            >
              Admin
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px; /* Ensure height is set */
  z-index: 1000;
  background-color: #1a202c;
}
</style>
