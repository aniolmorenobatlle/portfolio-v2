<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import Catalan from '/src/assets/img/lang/catalan.png'
import Spanish from '/src/assets/img/lang/spanish.png'
import English from '/src/assets/img/lang/english.png'

const { locale } = useI18n()

const setCookie = (name, value, days) => {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`
}

const getCookie = (name) => {
  const cookieArr = document.cookie.split(';')
  for (let i = 0; i < cookieArr.length; i++) {
    const cookie = cookieArr[i].trim()
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1)
    }
  }
  return null
}

const buttons = ref([
  { id: 1, img: Catalan, lang: 'ca' },
  { id: 2, img: Spanish, lang: 'es' },
  { id: 3, img: English, lang: 'en' },
])

const showButtons = ref(false)

const setActiveButton = (lang) => {
  locale.value = lang
  setCookie('language', lang, 30) // 30 days

  const selectedButton = buttons.value.find((button) => button.lang === lang)
  buttons.value = [selectedButton, ...buttons.value.filter((button) => button.lang !== lang)]
  showButtons.value = false
}

const savedLanguage = getCookie('language')
if (savedLanguage) {
  locale.value = savedLanguage

  // Move the selected language to the first position
  buttons.value = [
    buttons.value.find((button) => button.lang === savedLanguage),
    ...buttons.value.filter((button) => button.lang !== savedLanguage),
  ]
}
</script>

<template>
  <div
    class="fixed bottom-5 right-5 flex flex-col-reverse items-center gap-2"
    @mouseenter="showButtons = true"
    @mouseleave="showButtons = false"
  >
    <transition-group name="fade-up" tag="div" class="flex flex-col-reverse gap-2">
      <button
        v-for="(button, index) in buttons"
        :key="button.id"
        class="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 duration-300 transition-all dark:bg-gray-950"
        :style="{ zIndex: buttons.length - index }"
        v-show="index === 0 || showButtons"
        @click="setActiveButton(button.lang)"
      >
        <img :src="button.img" :alt="button.lang" class="h-6 w-6" />
      </button>
    </transition-group>
  </div>
</template>

<style scoped>
.fade-up-enter-active {
  animation: fadeUp 0.3s ease-out forwards;
}

.fade-up-leave-active {
  animation: fadeDown 0.3s ease-in forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeDown {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>
