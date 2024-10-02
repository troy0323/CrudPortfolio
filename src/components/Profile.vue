<template>
  <div class="profile-container min-h-screen bg-gray-900 text-white p-8 pt-24"> 
    <!-- Added pt-24 to push the content below the navbar -->
    
    <!-- Header Section -->
    <div class="header flex flex-col md:flex-row justify-between items-center border-b border-white pb-4 mb-8">
      <div class="personal-info mb-4 md:mb-0">
        <h1 class="text-4xl font-bold">Troy Victor Pardillo</h1>
        <h2 class="text-xl">New Era University Student</h2>
        <p>Rodriguez, Rizal</p>
        <p>troypardillo20@gmail.com</p>
        <p><a href="https://myprofile.ph/troyvictorpardillo" target="_blank" class="text-blue-400">https://myprofile.ph/troyvictorpardillo</a></p>
        <p>09677445447</p>
      </div>
      <div class="profile-image">
        <img :src="profileImg" alt="Profile Picture" class="w-32 h-32 rounded-full shadow-lg" />
      </div>
    </div>

    <!-- Content Section -->
    <div class="content grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Left Column -->
      <div class="left-column">
        <!-- Basic Information -->
        <div class="section mb-8">
          <h2 class="font-bold text-lg border-b border-white pb-1">Basic Information</h2>
          <p>
            I am a 4th-year Computer Science student pursuing a career in cybersecurity with a strong foundation in cybersecurity fundamentals, network security, and threat identification. Passionate about protecting digital assets and staying ahead in the evolving cybersecurity landscape. Eager to explore more and learn different things to continuously improve my skills and knowledge.
          </p>
        </div>

        <!-- Education -->
        <div class="section mb-8">
          <h2 class="font-bold text-lg border-b border-white pb-1">Education</h2>
          <p><strong>AMA Fairview (2019-2021)</strong><br />
            Information and Communication Technology<br />
            Graduated with High Honors</p>
          <p><strong>New Era University</strong><br />
            Bachelor of Science in Computer Science<br />
            Dean’s Lister</p>
        </div>

        <!-- Soft Skills -->
        <div class="section mb-8">
          <h2 class="font-bold text-lg border-b border-white pb-1">Soft Skills</h2>
          <ul class="list-none pl-4">
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Problem-Solving</li>
            <li>Adaptability</li>
            <li>Time Management</li>
            <li>Attention to Detail</li>
            <li>Work Ethic</li>
            <li>Flexibility</li>
            <li>Patience</li>
            <li>Hardworking</li>
            <li>Discipline</li>
            <li>Willingness to learn</li>
            <li>Responsible</li>
          </ul>
        </div>
      </div>

      <!-- Right Column -->
      <div class="right-column">
        <!-- Training and Certifications -->
        <div class="section mb-8">
          <h2 class="font-bold text-lg border-b border-white pb-1">Trainings and Certifications</h2>
          <ul class="list-none pl-4">
            <li>Fortinet Certified Fundamentals in Cybersecurity</li>
            <li>Fortinet Certified Associate in Cybersecurity</li>
            <li>FCA - Fortigate Operator</li>
            <li>FCF - Technical Introduction to Cybersecurity</li>
            <li>FCF - Introduction to Threat Landscape</li>
            <li>FCF - Getting Started in Cybersecurity</li>
            <li>Cisco Introduction to Cybersecurity</li>
            <li>Cisco Cyber Threat Management</li>
            <li>Cisco Endpoint Security</li>
            <li>Cisco Hardware Basics</li>
            <li>Cisco Operating System Basics</li>
            <li>Cisco Introduction to Data Science</li>
            <li>Cybersecurity Workshop - Capture the Flag</li>
            <li>Introduction to Python</li>
            <li>Business Analytics with Python</li>
            <li>Data Analytics Essentials</li>
            <li>Oracle Cloud Data Management</li>
            <li>Oracle Cloud Infrastructure</li>
            <li>SQL and Relational Database</li>
          </ul>
        </div>

        <!-- Hard Skills -->
        <div class="section mb-8">
          <h2 class="font-bold text-lg border-b border-white pb-1">Hard Skills</h2>
          <ul class="list-none pl-4">
            <li>Network Security</li>
            <li>Threat Identification</li>
            <li>Endpoint Security</li>
            <li>Cloud Security</li>
            <li>Threat Intelligence</li>
            <li>Programming Language (Java, Python, SQL)</li>
            <li>Knowledge of how to use Power Bi</li>
            <li>Knowledge of how to use Pentaho</li>
            <li>Database Management</li>
            <li>Knowledge of how to use Microsoft Suite</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import profileImg from '@/assets/profile.jpg'; // Your profile picture file path
</script>

<style scoped>
.profile-container {
  background-color: #1a202c;
  color: white;
  font-family: Arial, sans-serif;
}

.header {
  border-bottom: 2px solid white;
}

.section h2 {
  font-size: 1.25rem;
}

ul {
  margin-left: 1rem;
}

a {
  color: #63b3ed;
  text-decoration: underline;
}

/* Added padding to push content below the fixed navbar */
.pt-24 {
  padding-top: 6rem; /* Equivalent to 24 in Tailwind CSS */
}

@media (min-width: 768px) {
  .header {
    flex-direction: row;
  }
}
</style>
