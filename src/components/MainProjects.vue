<script setup></script>

<template>
  <div class="flex flex-col items-center px-4">
    <div
      class="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      style="opacity: 1; transform: none"
    ></div>
    <section id="projects" class="scroll-mt-28 mb-28">
      <h2 class="text-3xl font-medium capitalize mb-8 text-center">My projects</h2>
      <div>
        <div style="opacity: 1; transform: none" class="group mb-3 sm:mb-8 last:mb-0">
          <section
            class="mb-3 bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
          >
            <div
              class="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col h-full"
            >
              <h3 class="text-2xl font-semibold mb-4">CryptoCrowd</h3>
              <ul class="flex flex-wrap gap-2 mb-3 sm:mt-auto">
                <p class="font-bold text-gray-500 dark:text-white/70">Made with:</p>
                <img
                  src="/src/components/icons/bootstrap.png"
                  alt="Next.js"
                  class="mr-3 text-2xl h-8"
                />
                <img
                  src="/src/components/icons/html.png"
                  alt="Tailwind CSS"
                  class="mr-3 text-2xl h-8"
                />
                <img
                  src="/src/components/icons/docker.png"
                  alt="Docker"
                  class="mr-3 text-2xl h-8"
                />
              </ul>
              <p class="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3">
                Cryptocurrency sentiment analysis website based on Twitter posts. Users can see the
                overall sentiment (positive, negative or neutral) of different Cryptocurrencies
                based on what people are currently posting on Twitter. Users can also see keywords
                and an average sentiment score. Stateless application that uses Elasticache and S3
                on AWS. It also used EC2 and auto-scaling to manage demand.
              </p>
              <div class="flex">
                <a
                  href="https://www.youtube.com/watch?v=uhyC0M4WIl4"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-full hover:scale-105"
                  ><svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="mr-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"
                    ></path>
                  </svg>
                  Demo
                </a>
                <a
                  href="https://github.com/ben04rogers/cab432-assignment-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center border border-[#111827] py-2 px-4 rounded-full mr-2 text-[#111827] hover:scale-105 dark:border-white dark:text-white dark:border-opacity-40"
                  ><svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="mr-1 opacity-70"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                    ></path>
                  </svg>
                  <span class="opacity-70">GitHub</span></a
                >
              </div>
            </div>
            <img
              alt="Project I worked on"
              loading="lazy"
              width="1748"
              height="1337"
              decoding="async"
              data-nimg="1"
              class="absolute hidden lg:block top-[60px] -right-10 w-[28.25rem] rounded-t-lg shadow-2xl scale-[1.0] transition lg:scale-[1.1]"
              style="color: transparent"
              src="/src/components/icons/css.png"
            />
          </section>

          <section
            class="mb-3 bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
          >
            <div
              class="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col h-full"
            >
              <h3 class="text-2xl font-semibold mb-4">CryptoCrowd</h3>
              <ul class="flex flex-wrap gap-2 mb-3 sm:mt-auto">
                <p class="font-bold text-gray-500 dark:text-white/70">Made with:</p>
                <img
                  src="/src/components/icons/bootstrap.png"
                  alt="Next.js"
                  class="mr-3 text-2xl h-8"
                />
                <img
                  src="/src/components/icons/html.png"
                  alt="Tailwind CSS"
                  class="mr-3 text-2xl h-8"
                />
                <img
                  src="/src/components/icons/docker.png"
                  alt="Docker"
                  class="mr-3 text-2xl h-8"
                />
              </ul>
              <p class="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3">
                Cryptocurrency sentiment analysis website based on Twitter posts. Users can see the
                overall sentiment (positive, negative or neutral) of different Cryptocurrencies
                based on what people are currently posting on Twitter. Users can also see keywords
                and an average sentiment score. Stateless application that uses Elasticache and S3
                on AWS. It also used EC2 and auto-scaling to manage demand.
              </p>
              <div class="flex">
                <a
                  href="https://www.youtube.com/watch?v=uhyC0M4WIl4"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-full hover:scale-105"
                  ><svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="mr-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"
                    ></path>
                  </svg>
                  Demo
                </a>
                <a
                  href="https://github.com/ben04rogers/cab432-assignment-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center border border-[#111827] py-2 px-4 rounded-full mr-2 text-[#111827] hover:scale-105 dark:border-white dark:text-white dark:border-opacity-40"
                  ><svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="mr-1 opacity-70"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                    ></path>
                  </svg>
                  <span class="opacity-70">GitHub</span></a
                >
              </div>
            </div>
            <img
              alt="Project I worked on"
              loading="lazy"
              width="1748"
              height="1337"
              decoding="async"
              data-nimg="1"
              class="absolute hidden lg:block top-[60px] -right-10 w-[28.25rem] rounded-t-lg shadow-2xl scale-[1.0] transition lg:scale-[1.1]"
              style="color: transparent"
              src="/src/components/icons/css.png"
            />
          </section>

          <section
            class="mb-3 bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
          >
            <div
              class="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col h-full"
            >
              <h3 class="text-2xl font-semibold mb-4">CryptoCrowd</h3>
              <ul class="flex flex-wrap gap-2 mb-3 sm:mt-auto">
                <p class="font-bold text-gray-500 dark:text-white/70">Made with:</p>
                <img
                  src="/src/components/icons/bootstrap.png"
                  alt="Next.js"
                  class="mr-3 text-2xl h-8"
                />
                <img
                  src="/src/components/icons/html.png"
                  alt="Tailwind CSS"
                  class="mr-3 text-2xl h-8"
                />
                <img
                  src="/src/components/icons/docker.png"
                  alt="Docker"
                  class="mr-3 text-2xl h-8"
                />
              </ul>
              <p class="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3">
                Cryptocurrency sentiment analysis website based on Twitter posts. Users can see the
                overall sentiment (positive, negative or neutral) of different Cryptocurrencies
                based on what people are currently posting on Twitter. Users can also see keywords
                and an average sentiment score. Stateless application that uses Elasticache and S3
                on AWS. It also used EC2 and auto-scaling to manage demand.
              </p>
              <div class="flex">
                <a
                  href="https://www.youtube.com/watch?v=uhyC0M4WIl4"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-full hover:scale-105"
                  ><svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="mr-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"
                    ></path>
                  </svg>
                  Demo
                </a>
                <a
                  href="https://github.com/ben04rogers/cab432-assignment-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center border border-[#111827] py-2 px-4 rounded-full mr-2 text-[#111827] hover:scale-105 dark:border-white dark:text-white dark:border-opacity-40"
                  ><svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="mr-1 opacity-70"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                    ></path>
                  </svg>
                  <span class="opacity-70">GitHub</span></a
                >
              </div>
            </div>
            <img
              alt="Project I worked on"
              loading="lazy"
              width="1748"
              height="1337"
              decoding="async"
              data-nimg="1"
              class="absolute hidden lg:block top-[60px] -right-10 w-[28.25rem] rounded-t-lg shadow-2xl scale-[1.0] transition lg:scale-[1.1]"
              style="color: transparent"
              src="/src/components/icons/css.png"
            />
          </section>

          <section
            class="mb-3 bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
          >
            <div
              class="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col h-full"
            >
              <h3 class="text-2xl font-semibold mb-4">CryptoCrowd</h3>
              <ul class="flex flex-wrap gap-2 mb-3 sm:mt-auto">
                <p class="font-bold text-gray-500 dark:text-white/70">Made with:</p>
                <img
                  src="/src/components/icons/bootstrap.png"
                  alt="Next.js"
                  class="mr-3 text-2xl h-8"
                />
                <img
                  src="/src/components/icons/html.png"
                  alt="Tailwind CSS"
                  class="mr-3 text-2xl h-8"
                />
                <img
                  src="/src/components/icons/docker.png"
                  alt="Docker"
                  class="mr-3 text-2xl h-8"
                />
              </ul>
              <p class="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3">
                Cryptocurrency sentiment analysis website based on Twitter posts. Users can see the
                overall sentiment (positive, negative or neutral) of different Cryptocurrencies
                based on what people are currently posting on Twitter. Users can also see keywords
                and an average sentiment score. Stateless application that uses Elasticache and S3
                on AWS. It also used EC2 and auto-scaling to manage demand.
              </p>
              <div class="flex">
                <a
                  href="https://www.youtube.com/watch?v=uhyC0M4WIl4"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-full hover:scale-105"
                  ><svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="mr-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"
                    ></path>
                  </svg>
                  Demo
                </a>
                <a
                  href="https://github.com/ben04rogers/cab432-assignment-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center border border-[#111827] py-2 px-4 rounded-full mr-2 text-[#111827] hover:scale-105 dark:border-white dark:text-white dark:border-opacity-40"
                  ><svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="mr-1 opacity-70"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                    ></path>
                  </svg>
                  <span class="opacity-70">GitHub</span></a
                >
              </div>
            </div>
            <img
              alt="Project I worked on"
              loading="lazy"
              width="1748"
              height="1337"
              decoding="async"
              data-nimg="1"
              class="absolute hidden lg:block top-[60px] -right-10 w-[28.25rem] rounded-t-lg shadow-2xl scale-[1.0] transition lg:scale-[1.1]"
              style="color: transparent"
              src="/src/components/icons/css.png"
            />
          </section>
        </div>
      </div>
    </section>
  </div>
</template>
