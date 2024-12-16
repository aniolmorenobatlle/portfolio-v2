<script setup>
import MainNav from '@/components/Header/MainNav.vue'
import MainHeader from '@/components/Header/MainHeader.vue'
import MainProjects from '@/components/MainProjects.vue'
import MainSkills from '@/components/MainSkills.vue'
import MainExperience from '@/components/MainExperience.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <MainNav />
      <MainHeader />
    </div>
  </header>

  <main class="flex flex-col items-center px-4">
    <MainProjects />
    <MainSkills />
    <MainExperience />
  </main>
</template>
