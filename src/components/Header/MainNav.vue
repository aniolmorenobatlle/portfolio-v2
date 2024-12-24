<script setup>
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const sections = computed(() => [
  { name: t('nav.home'), id: 'home' },
  { name: t('nav.projects'), id: 'projects' },
  { name: t('nav.skills'), id: 'skills' },
  { name: t('nav.experience'), id: 'experience' },
  { name: t('nav.education'), id: 'education' },
  { name: t('nav.contact'), id: 'contact' },
])

const activeSection = ref('home')

const updateActiveSection = () => {
  let found = false
  sections.value.forEach((section) => {
    const element = document.getElementById(section.id)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
        activeSection.value = section.id
        found = true
      }
    }
  })

  if (!found) activeSection.value = sections.value[0].id
}

onMounted(() => {
  updateActiveSection()
  window.addEventListener('scroll', updateActiveSection)
})

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const widthClass = computed(() => {
  switch (locale.value) {
    case 'ca':
      return 'sm:w-[38rem]'
    case 'es':
      return 'sm:w-[40rem]'
    default:
      return 'sm:w-[36rem]'
  }
})
</script>

<template>
  <div
    class="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
    :class="[widthClass]"
    style="opacity: 1; transform: translateX(-50%) translateY(0px); z-index: 9999"
  ></div>
  <nav
    class="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
    style="z-index: 9999"
  >
    <ul
      class="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5"
    >
      <li
        v-for="section in sections"
        :key="section.id"
        class="h-3/4 flex items-center justify-center relative"
      >
        <a
          href="javascript:void(0)"
          :class="[
            'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-300',
            activeSection === section.id ? 'text-gray-950 dark:text-gray-300' : '',
          ]"
          @click="scrollToSection(section.id)"
        >
          {{ section.name }}
          <span
            v-if="activeSection === section.id"
            class="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
          >
          </span>
        </a>
      </li>
    </ul>
  </nav>
</template>
