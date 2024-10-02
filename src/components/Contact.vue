
<template>
  <div class="contact-page bg-gray-900 min-h-screen flex flex-col lg:flex-row justify-center items-center w-full">
    <div class="container mx-auto px-4 flex flex-col lg:flex-row lg:space-x-10 space-y-10 lg:space-y-0 w-full">
      
      <!-- Contact Form -->
      <div class="contact-form w-full lg:w-1/2 bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
        <h2 class="text-4xl font-bold mb-8 text-white">Get In Touch</h2>
        <form class="space-y-4">
          <div>
            <label for="name" class="block text-white">Name*</label>
            <input id="name" type="text" class="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label for="email" class="block text-white">E-mail*</label>
            <input id="email" type="email" class="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label for="message" class="block text-white">Message*</label>
            <textarea id="message" rows="4" class="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
          </div>
          <div>
            <button type="submit" class="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition">SEND</button>
          </div>
        </form>
      </div>

      <!-- Contact Info -->
      <div class="contact-info w-full lg:w-1/2 bg-black bg-opacity-50 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center text-white">
        <div class="text-center">
          <div class="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 6V4m-6 0h12" />
            </svg>
          </div>
          <p class="text-lg">Address:</p>
          <p class="font-semibold mb-4">Rizal, Philippines</p>
          <p class="text-lg">Email:</p>
          <p class="font-semibold">
            <a href="mailto:troypardillo.va@gmail.com" class="text-teal-500 hover:underline">
              troypardillo20@gmail.com
            </a>
          </p>

          <div class="mt-8">
            <p class="text-xl font-semibold">Check out my portfolio for more:</p>
            <a href="https://myprofile.ph/troyvictorpardillo" target="_blank" class="text-teal-500 hover:underline">
              https://myprofile.ph/troyvictorpardillo
            </a>
          </div>
        </div>

        <!-- Social Links -->
        <div class="mt-8 flex space-x-4">
          <a href="#" class="text-teal-500 hover:text-white">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="text-teal-500 hover:text-white">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.contact-page {
  background-image: url('/path/to/your/background-image.jpg'); /* Add the background image here */
  background-size: cover;
  background-position: center;
}
</style>
<!-- <script>
export default {
  name: "contact",
};
</script> -->
