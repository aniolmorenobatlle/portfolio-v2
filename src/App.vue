<script setup>
import MainNav from '@/components/Header/MainNav.vue'
import MainHeader from '@/components/Header/MainHeader.vue'
import MainProjects from '@/components/MainProjects.vue'
import MainSkills from '@/components/MainSkills.vue'
import MainExperience from '@/components/MainExperience.vue'
import MainEducation from '@/components/MainEducation.vue'
import MainContact from '@/components/MainContact.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <MainNav />
      <MainHeader id="home" />
    </div>
  </header>

  <main class="flex flex-col items-center px-4">
    <MainProjects id="projects" />
    <MainSkills id="skills" />
    <MainExperience id="experience" />
    <MainEducation id="education" />
    <MainContact id="contact" />
  </main>

  <footer>
    <MainFooter />
  </footer>
</template>
