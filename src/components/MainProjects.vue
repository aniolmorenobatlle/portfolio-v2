<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

import truetaImg from '/src/assets/img/projects/trueta.png'
import barbaqImg from '/src/assets/img/projects/barbaq.png'
import openJobsImg from '/src/assets/img/projects/openjobs.png'
import apartamentsFiguerencsImg from '/src/assets/img/projects/apartamentsfiguerencs.png'
import gramolaImg from '/src/assets/img/projects/gramola.png'
import freeingAlzaharImg from '/src/assets/img/projects/freeing-alzahar.jpg'

const { t } = useI18n()

const title = computed(() => t('projects.title'))

const projects = computed(() => [
  {
    name: t('projects.trueta.title'),
    description: t('projects.trueta.description'),
    user: t('projects.trueta.user'),
    password: t('projects.trueta.password'),
    techStack: [
      'logos:vue',
      'logos:laravel',
      'logos:tailwindcss-icon',
      'logos:mariadb-icon',
      'cib:oracle',
    ],
    demoLink: 'https://antibiotic.aniolmorenobatlle.com/',
    githubLink: '',
    mainImage: truetaImg,
  },
  {
    name: t('projects.barbaq.title'),
    description: t('projects.barbaq.description'),
    techStack: [
      'logos:vue',
      'logos:laravel',
      'logos:tailwindcss-icon',
      'logos:mariadb-icon',
      'cib:oracle',
    ],
    demoLink: 'https://barbaq.aniolmorenobatlle.com/',
    githubLink: '',
    mainImage: barbaqImg,
  },
  {
    name: t('projects.openjobs.title'),
    description: t('projects.openjobs.description'),
    techStack: [
      'logos:vue',
      'logos:laravel',
      'logos:tailwindcss-icon',
      'logos:mariadb-icon',
      'cib:oracle',
    ],
    demoLink: 'https://openjobs.aniolmorenobatlle.com/',
    githubLink: '',
    mainImage: openJobsImg,
  },
  {
    name: t('projects.apartamentsFiguerencs.title'),
    description: t('projects.apartamentsFiguerencs.description'),
    techStack: ['logos:php', 'logos:javascript', 'logos:bootstrap', 'logos:aws'],
    demoLink: 'https://apartamentsfiguerencs.aniolmorenobatlle.com/',
    githubLink: '',
    mainImage: apartamentsFiguerencsImg,
  },
  {
    name: t('projects.gramola.title'),
    description: t('projects.gramola.description'),
    techStack: [
      'logos:php',
      'logos:javascript',
      'vscode-icons:file-type-html',
      'vscode-icons:file-type-css',
      'logos:aws',
    ],
    demoLink: 'https://gramola.aniolmorenobatlle.com/',
    githubLink: 'https://github.com/aniolmorenobatlle/gramola',
    mainImage: gramolaImg,
  },
  {
    name: t('projects.freeingAlzahar.title'),
    description: t('projects.freeingAlzahar.description'),
    techStack: [
      'vscode-icons:file-type-html',
      'vscode-icons:file-type-css',
      'logos:php',
      'logos:javascript',
      'logos:unity',
      'logos:mysql',
      'logos:netlify',
    ],
    demoLink: 'https://freeing-alazhar.netlify.app/',
    githubLink: 'https://github.com/aniolmorenobatlle/freeing-alzahar',
    mainImage: freeingAlzaharImg,
  },
])
</script>

<template>
  <div class="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20" />

  <section id="projects" class="scroll-mt-28 mb-28">
    <h2 class="text-3xl font-medium capitalize mb-8 text-center">{{ title }}</h2>
    <div>
      <div v-for="(project, index) in projects" :key="index" class="group mb-3 sm:mb-8 last:mb-0">
        <section
          class="mb-3 bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
        >
          <div class="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col h-full">
            <h3 class="text-2xl font-semibold mb-4">{{ project.name }}</h3>
            <ul class="flex flex-wrap gap-2 mb-3 sm:mt-auto">
              <p class="font-bold text-gray-500 dark:text-white/70">Made with:</p>
              <Icon
                v-for="(tech, idx) in project.techStack"
                :key="idx"
                :icon="tech"
                class="mr-3 text-2xl h-8"
              />
            </ul>
            <p class="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3">
              {{ project.description }}
            </p>
            <p
              v-if="project.user"
              class="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3"
            >
              <b>{{ project.user }}</b> user@trueta.cat
            </p>
            <p
              v-if="project.password"
              class="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3"
            >
              <b>{{ project.password }}</b> password
            </p>
            <div class="flex">
              <a
                :href="project.demoLink"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-full transition-transform duration-300 hover:scale-105"
              >
                <Icon icon="akar-icons:play" class="mr-1" height="1em" width="1em" />
                Demo
              </a>
              <a
                v-if="project.githubLink"
                :href="project.githubLink"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center border border-[#111827] py-2 px-4 rounded-full mr-2 text-[#111827] transition-transform duration-300 hover:scale-105 dark:border-white dark:text-white dark:border-opacity-40"
              >
                <Icon icon="logos:github-icon" class="mr-1 opacity-70" height="1em" width="1em" />
                <span class="opacity-70">GitHub</span>
              </a>
            </div>
          </div>

          <img
            :src="project.mainImage"
            alt="Project I worked on"
            loading="lazy"
            width="1748"
            height="1337"
            decoding="async"
            data-nimg="1"
            class="absolute hidden lg:block top-[60px] -right-10 w-[28.25rem] rounded-t-lg shadow-2xl scale-[1.0] transition lg:scale-[1.1]"
            style="color: transparent"
          />
        </section>
      </div>
    </div>
  </section>
</template>
