<script setup>
import MainNav from '@/components/Header/MainNav.vue'
import MainHeader from '@/components/Header/MainHeader.vue'
import MainProjects from '@/components/MainProjects.vue'
import MainSkills from '@/components/MainSkills.vue'
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
  </main>
</template>
