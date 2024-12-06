<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div
    class="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4 bg-black"
  >
    <div class="flex items-center justify-center">
      <div class="relative">
        <div style="opacity: 1; transform: none">
          <img
            src="/src/assets/img/amoreno.jpg"
            alt="Aniol portrait"
            fetchpriority="high"
            width="192"
            height="192"
            class="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            style="color: transparent"
          />
        </div>
        <span class="absolute bottom-0 right-0 text-4xl" style="opacity: 1; transform: none"
          >👋</span
        >
      </div>
    </div>

    <h1
      class="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white max-w-[50rem] mx-auto"
      style="opacity: 1; transform: none"
    >
      Hello, I'm Aniol. I'm a web and software developer. I'm currently working with Java, Laravel
      and Vue.js.
    </h1>

    <div
      class="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      style="opacity: 1; transform: none"
    >
      <a
        class="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
        href="https://github.com/aniolmorenobatlle"
        target="_blank"
      >
        GitHub

        <Icon
          icon="logos:github-icon"
          alt="GitHub logo"
          width="24"
          height="24"
          class="opacity-70"
        />
      </a>
      <a
        class="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
        href="https://www.linkedin.com/in/aniol-moreno-batlle/"
        target="_blank"
      >
        <span class="opacity-70">LinkedIn</span>
        <Icon icon="il:linkedin" alt="LinkedIn logo" width="24" height="24" class="opacity-70" />
      </a>
    </div>
  </div>
</template>

<style scoped></style>
