<script setup>
import { Icon } from '@iconify/vue'

// Array de projectes
const projects = [
  {
    name: 'CryptoCrowd',
    description:
      'Cryptocurrency sentiment analysis website based on Twitter posts. Users can see the overall sentiment (positive, negative or neutral) of different Cryptocurrencies based on what people are currently posting on Twitter. Users can also see keywords and an average sentiment score. Stateless application that uses Elasticache and S3 on AWS. It also used EC2 and auto-scaling to manage demand.',
    techStack: ['logos:javascript', 'logos:aws'],
    demoLink: 'https://www.youtube.com/watch?v=uhyC0M4WIl4',
    githubLink: 'https://github.com/ben04rogers/cab432-assignment-2',
    mainImage: '/src/assets/img/projects/openjobs.png',
  },
  {
    name: 'Project 2',
    description:
      'Description for the second project. This project uses cutting-edge technology and innovative approaches.',
    techStack: ['logos:vue', 'logos:tailwindcss-icon'],
    demoLink: 'https://example.com/demo',
    githubLink: 'https://github.com/example/project2',
    mainImage: '/src/assets/img/projects/openjobs.png',
  },
]
</script>

<template>
  <div
    class="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
    style="opacity: 1; transform: none"
  ></div>

  <section id="projects" class="scroll-mt-28 mb-28">
    <h2 class="text-3xl font-medium capitalize mb-8 text-center">My Projects</h2>
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
