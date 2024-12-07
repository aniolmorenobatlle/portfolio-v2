<script setup>
import { Icon } from '@iconify/vue'

const projects = [
  {
    name: "Selecció d'Antibiótics en Intervencions Quirúrgiques",
    description:
      "Aquesta aplicació web va ser dissenyada i desenvolupada amb l'objectiu de facilitar la selecció ràpida i eficaç de l'antibiótic adequat per a cada intervenció quirúrgica. El projecte, que va ser realitzat per Joan Paneque, Emma Cardosa, Adrià Moya, Àlex Escribano i Aniol Moreno, va ser encarregat per l'Hospital Universitari de Girona Dr. Josep Trueta com a part d'una iniciativa per millorar els processos clínics. Aquesta aplicació va ser reconeguda amb el Premi de Grau Superior atorgat per la Universitat de Girona, destacant-se per la seva innovació i impacte en el sector sanitari.",
    techStack: [
      'logos:vue',
      'logos:laravel',
      'logos:tailwindcss-icon',
      'logos:mariadb-icon',
      'cib:oracle',
    ],
    demoLink: 'https://opendata.ignorelist.com/',
    githubLink: '',
    mainImage: '/src/assets/img/projects/openjobs.png',
  },
  {
    name: 'Barbaq',
    description:
      "Barbaq és una aplicació de xarxa social dissenyada per facilitar l'organització de quedades per a barbacoes entre amics i/o familiars. Aquest projecte va ser desenvolupat en grup per Joan Paneque, Emma Cardosa, Roman Mysyura i Aniol Moreno a l'Institut Cendrassos de Figueres, amb l'objectiu de proporcionar una plataforma eficient i intuïtiva per coordinar esdeveniments socials al voltant d'aquest tipus d'activitat.",
    techStack: [
      'logos:vue',
      'logos:laravel',
      'logos:tailwindcss-icon',
      'logos:mariadb-icon',
      'cib:oracle',
    ],
    demoLink: 'https://opendata.ignorelist.com/',
    githubLink: '',
    mainImage: '/src/assets/img/projects/openjobs.png',
  },
  {
    name: 'OpenJobs',
    description:
      "OpenJobs és una plataforma de cerca de feina que utilitza dades obertes proporcionades per la Generalitat de Catalunya, amb l'objectiu d'oferir una eina eficaç i accessible per a la recerca d'ocupació. Aquesta aplicació va ser dissenyada i desenvolupada en grup per Joan Paneque, Emma Cardosa i Aniol Moreno a l'Institut Cendrassos de Figueres, contribuint a la creació d'una solució innovadora per al mercat laboral.",
    techStack: [
      'logos:vue',
      'logos:laravel',
      'logos:tailwindcss-icon',
      'logos:mariadb-icon',
      'cib:oracle',
    ],
    demoLink: 'https://openjobs.aniolmorenobatlle.com/',
    githubLink: '',
    mainImage: '/src/assets/img/projects/openjobs.png',
  },
  {
    name: 'Apartaments Figuerencs',
    description:
      "Apartaments Figuerencs és una aplicació que simula una plataforma web de lloguer d'apartaments turístics, dissenyada per oferir una experiència realista en la gestió de reserves. Aquesta aplicació va ser desenvolupada en grup per Joan Paneque i Aniol Moreno a l'Institut Cendrassos de Figueres, amb l'objectiu de crear una solució eficient i intuïtiva per a la simulació de lloguers turístics.",
    techStack: ['logos:php', 'logos:javascript', 'logos:bootstrap', 'logos:aws'],
    demoLink: 'https://opendata.ignorelist.com/',
    githubLink: '',
    mainImage: '/src/assets/img/projects/apartamentsfiguerencs.png',
  },
  {
    name: 'Gramola',
    description:
      "Gramola és una aplicació que simula una plataforma de música en línia, dissenyada per oferir una experiència interactiva en la reproducció i gestió de música. Aquesta aplicació va ser desenvolupada de manera independent per Aniol Moreno a l'Institut Cendrassos de Figueres, amb l'objectiu de crear una solució innovadora en l'àmbit de l'entreteniment digital.",
    techStack: [
      'logos:php',
      'logos:javascript',
      'vscode-icons:file-type-html',
      'vscode-icons:file-type-css',
      'logos:aws',
    ],
    demoLink: 'https://opendata.ignorelist.com/',
    githubLink: 'https://github.com/aniolmorenobatlle/gramola',
    mainImage: '/src/assets/img/projects/gramola.png',
  },
  {
    name: 'Freeing Alzahar',
    description:
      "Freeing Alzahar és una pàgina web interactiva que inclou un joc arcade inspirat en Mario Bros, creat per oferir una experiència lúdica entretinguda i dinàmica. Aquesta aplicació va ser desenvolupada per Marc Mas i Aniol Moreno com a projecte final del cicle formatiu de Grau Mitjà en Sistemes Microinformàtics i Xarxes a l'Institut Públic de Palamós, amb l'objectiu de combinar coneixements tècnics i creativitat en un projecte complet.",
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
    mainImage: '/src/assets/img/projects/freeing-alzahar.jpg',
  },
]
</script>

<template>
  <div class="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20" />

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
