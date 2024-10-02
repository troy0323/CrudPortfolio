<template>
  <div class="min-h-screen w-full bg-gray-900 p-8 text-white">
    <h1 class="text-4xl font-bold text-center mb-6 pt-24">Admin Panel</h1>

    <!-- Manage Home Section -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Edit Home Information</h2>
      <form @submit.prevent="saveHome">
        <div class="mb-4">
          <label class="block mb-2">Title</label>
          <input type="text" v-model="homeData.title" class="w-full p-2 bg-gray-800 text-white rounded-lg" />
        </div>
        <div class="mb-4">
          <label class="block mb-2">Age</label>
          <input type="number" v-model="homeData.age" class="w-full p-2 bg-gray-800 text-white rounded-lg" />
        </div>
        <div class="mb-4">
          <label class="block mb-2">Address</label>
          <input type="text" v-model="homeData.address" class="w-full p-2 bg-gray-800 text-white rounded-lg" />
        </div>
        <button class="bg-blue-500 px-4 py-2 rounded">Save</button>
      </form>
    </section>

    <!-- Manage Contact Section -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Edit Contact Information</h2>
      <form @submit.prevent="saveContact">
        <div class="mb-4">
          <label class="block mb-2">Address</label>
          <input type="text" v-model="contactData.address" class="w-full p-2 bg-gray-800 text-white rounded-lg" />
        </div>
        <div class="mb-4">
          <label class="block mb-2">Email</label>
          <input type="email" v-model="contactData.email" class="w-full p-2 bg-gray-800 text-white rounded-lg" />
        </div>
        <button class="bg-blue-500 px-4 py-2 rounded">Save</button>
      </form>
    </section>

    <!-- Manage Resume Section -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Edit Resume Information</h2>
      <form @submit.prevent="saveProfile">
        <div class="mb-4">
          <label class="block mb-2">Name</label>
          <input type="text" v-model="profileData.name" class="w-full p-2 bg-gray-800 text-white rounded-lg" />
        </div>

        <!-- Education Section -->
        <div class="mb-4">
          <label class="block mb-2">Education</label>
          <ul>
            <li v-for="(education, index) in profileData.education" :key="index" class="mb-4">
              <div class="mb-2">
                <strong>{{ education.institution }}</strong>
                <p>{{ education.degree }}</p>
                <p>{{ education.honors }}</p>
              </div>
              <button @click="deleteEducation(index)" class="bg-red-500 text-white px-2 rounded">Delete</button>
            </li>
          </ul>
          <input type="text" v-model="newEducation.institution" placeholder="Add new institution" class="w-full p-2 bg-gray-800 text-white rounded-lg mb-2" />
          <input type="text" v-model="newEducation.degree" placeholder="Add new degree" class="w-full p-2 bg-gray-800 text-white rounded-lg mb-2" />
          <input type="text" v-model="newEducation.honors" placeholder="Add honors" class="w-full p-2 bg-gray-800 text-white rounded-lg mb-2" />
          <button type="button" @click="addEducation" class="mt-2 bg-green-500 px-4 py-2 rounded">Add Education</button>
        </div>

        <!-- Certifications Section -->
        <div class="mb-4">
          <label class="block mb-2">Certifications</label>
          <ul class="mb-4">
            <li v-for="(cert, index) in profileData.certifications" :key="index" class="mb-2 flex justify-between">
              <span>{{ cert }}</span>
              <button @click="deleteCertification(index)" class="bg-red-500 text-white px-2 rounded">Delete</button>
            </li>
          </ul>
          <input type="text" v-model="newCertification" placeholder="Add new certification" class="w-full p-2 bg-gray-800 text-white rounded-lg" />
          <button type="button" @click="addCertification" class="mt-2 bg-green-500 px-4 py-2 rounded">Add Certification</button>
        </div>
        <button class="bg-blue-500 px-4 py-2 rounded">Save</button>
      </form>
    </section>
  </div>
</template>

<script>
import { useMainStore } from '@/stores/useMainStore';
import { computed, ref } from 'vue';

export default {
  setup() {
    const store = useMainStore();

    // Home Data
    const homeData = computed(() => ({ ...store.home }));
    const saveHome = () => {
      store.updateHome(homeData.value);
    };

    // Contact Data
    const contactData = computed(() => ({ ...store.contact }));
    const saveContact = () => {
      store.updateContact(contactData.value);
    };

    // Profile Data
    const profileData = computed(() => ({ ...store.profile }));
    const newCertification = ref('');
    const newEducation = ref({
      institution: '',
      degree: '',
      honors: '',
    });

    const saveProfile = () => {
      store.updateProfile(profileData.value);
    };

    const addCertification = () => {
      if (newCertification.value) {
        store.addCertification(newCertification.value);
        newCertification.value = ''; // Clear input
      }
    };

    const deleteCertification = (index) => {
      store.deleteCertification(index);
    };

    const addEducation = () => {
      if (newEducation.value.institution && newEducation.value.degree) {
        store.addEducation({ ...newEducation.value });
        newEducation.value.institution = '';
        newEducation.value.degree = '';
        newEducation.value.honors = '';
      }
    };

    const deleteEducation = (index) => {
      store.deleteEducation(index);
    };

    return {
      homeData,
      saveHome,
      contactData,
      saveContact,
      profileData,
      saveProfile,
      newCertification,
      addCertification,
      deleteCertification,
      newEducation,
      addEducation,
      deleteEducation,
    };
  },
};
</script>

<style scoped>
/* Styling for your admin page */
button {
  transition: background-color 0.3s ease;
}
button:hover {
  filter: brightness(110%);
}
</style>
