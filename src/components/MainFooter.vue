<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <footer class="bg-gray-900">
    <div class="w-full max-w-screen-xl mx-auto p-4 py-8">
      <span class="block text-gray-400 text-center text-2xl font-semibold">
        Aniol Moreno Batlle
      </span>
      <span class="flex items-center justify-center gap-2 text-gray-400 text-center mt-3">
        <a href="https://www.linkedin.com/in/aniol-moreno-batlle/" target="_blank" class="text-2xl">
          <Icon icon="il:linkedin" alt="LinkedIn logo" height="25" />
        </a>
        <a href="https://github.com/aniolmorenobatlle" target="_blank" class="text-2xl">
          <Icon icon="uil:github" alt="GitHub logo" height="25" />
        </a>
      </span>
      <hr class="my-4 border-gray-700" />
      <span class="block text-sm text-gray-400 text-center"> © Aniol Moreno Batlle </span>
    </div>
  </footer>
</template>
