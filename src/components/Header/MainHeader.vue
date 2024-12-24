<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const userData = {
  portrait: '/src/assets/img/amoreno.jpg',
  githubLink: 'https://github.com/aniolmorenobatlle',
  linkedinLink: 'https://www.linkedin.com/in/aniol-moreno-batlle/',
  githubIcon: 'logos:github-icon',
  linkedinIcon: 'il:linkedin',
}

const description = computed(() => t('header.description'))
</script>

<template>
  <div
    class="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4 bg-gray-900"
  >
    <div class="flex items-center justify-center">
      <div class="relative">
        <div style="opacity: 1; transform: none">
          <img
            :src="userData.portrait"
            alt="Aniol portrait"
            fetchpriority="high"
            width="192"
            height="192"
            class="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            style="color: transparent"
          />
        </div>
        <span class="absolute bottom-0 right-0 text-4xl" style="opacity: 1; transform: none">
          👋
        </span>
      </div>
    </div>

    <h1
      class="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white max-w-[50rem] mx-auto"
      style="opacity: 1; transform: none"
    >
      {{ description }}
    </h1>

    <div
      class="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      style="opacity: 1; transform: none"
    >
      <a
        class="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
        :href="userData.githubLink"
        target="_blank"
      >
        GitHub

        <Icon
          :icon="userData.githubIcon"
          alt="GitHub logo"
          width="24"
          height="24"
          class="opacity-70"
        />
      </a>
      <a
        class="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
        :href="userData.linkedinLink"
        target="_blank"
      >
        <span class="opacity-70">LinkedIn</span>
        <Icon
          :icon="userData.linkedinIcon"
          alt="LinkedIn logo"
          width="24"
          height="24"
          class="opacity-70"
        />
      </a>
    </div>
  </div>
</template>
