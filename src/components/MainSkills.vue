<script setup>
import { Icon } from '@iconify/vue'

const skills = [
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'HTML', icon: 'vscode-icons:file-type-html' },
  { name: 'CSS', icon: 'vscode-icons:file-type-css' },
  { name: 'PHP', icon: 'logos:php' },
  { name: 'Vue.js', icon: 'vscode-icons:file-type-vue' },
  { name: 'Laravel', icon: 'logos:laravel' },
  { name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
  { name: 'Bootstrap', icon: 'logos:bootstrap' },
  { name: 'Vite', icon: 'logos:vitejs' },
  { name: 'Java', icon: 'logos:java' },
  { name: 'Python', icon: 'logos:python' },
  { name: 'MariaDB', icon: 'logos:mariadb' },
  { name: 'MySQL', icon: 'logos:mysql' },
  { name: 'AWS', icon: 'logos:aws' },
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'GitHub', icon: 'logos:github-icon' },
  { name: 'Docker', icon: 'logos:docker-icon' },
]
</script>

<template>
  <section id="skills" class="mb-28 max-w-[58rem] scroll-mt-28 text-center sm:mb-40">
    <h2 class="text-3xl font-medium capitalize mb-8 text-center">My Skills</h2>
    <ul class="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
      <li
        v-for="(skill, index) in skills"
        :key="index"
        class="flex flex-col items-center px-4 py-3 dark:text-white/80 iconify transition-transform duration-300 hover:scale-125"
      >
        <Icon :icon="skill.icon" class="text-5xl md:text-7xl" />
        <span class="mt-2">{{ skill.name }}</span>
      </li>
    </ul>
  </section>
</template>
