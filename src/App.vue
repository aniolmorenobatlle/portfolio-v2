<script setup>
import MainNav from '@/components/Header/MainNav.vue'
import MainHeader from '@/components/Header/MainHeader.vue'
import MainProjects from '@/components/MainProjects.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <MainNav />
      <MainHeader />
    </div>
  </header>

  <main>
    <MainProjects />
  </main>
</template>
