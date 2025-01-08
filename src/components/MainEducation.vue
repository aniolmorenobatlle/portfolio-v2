<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import cendrassosLogo from '/src/assets/img/institution/logo-cendrassos.jpeg'
import palamosLogo from '/src/assets/img/institution/logo-institut-palamos.png'

const { t } = useI18n()

const title = computed(() => t('education.title'))

const educations = computed(() => [
  {
    degree: t('education.software-developer.title'),
    institution: t('education.software-developer.institution'),
    description: t('education.software-developer.description'),
    image: palamosLogo,
  },
  {
    degree: t('education.web-developer.title'),
    institution: t('education.web-developer.institution'),
    description: t('education.web-developer.description'),
    image: cendrassosLogo,
  },
  {
    degree: t('education.computer-technician.title'),
    institution: t('education.computer-technician.institution'),
    description: t('education.computer-technician.description'),
    image: palamosLogo,
  },
])
</script>

<template>
  <section
    id="education"
    class="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
    style="opacity: 1"
  >
    <h2 class="text-3xl font-medium capitalize mb-8 text-center">{{ title }}</h2>
    <div
      v-for="(education, index) in educations"
      :key="index"
      class="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20"
    >
      <div class="hidden sm:block">
        <img
          :src="education.image"
          alt=""
          class="w-[150px] h-[150px] object-contain max-w-none"
          />
      </div>
      <div>
        <p class="text-lg font-medium">{{ education.degree }}</p>
        <p>{{ education.institution }}</p>
        <p class="mt-1">{{ education.graduation }}</p>
        <p class="mt-1">{{ education.description }}</p>
      </div>
    </div>
  </section>
</template>
