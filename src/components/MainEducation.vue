<script setup>
const educations = [
  {
    degree: 'Bachelor of Information Technology',
    institution: 'Queensland University of Technology',
    graduation: 'Graduated in 2023',
    image: 'https://www.benrogers.dev/_next/static/media/qut-Logo.807b96e8.png',
    details: [
      'Major in Computer Science',
      'Minor in Networks & Security',
      'Minor in Mobile Applications',
      "Science & Engineering Dean's List - 2019 & 2021",
    ],
  },
]
</script>

<template>
  <section
    id="education"
    class="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
    style="opacity: 1"
  >
    <h2 class="text-3xl font-medium capitalize mb-8 text-center">My Education</h2>
    <div
      v-for="(education, index) in educations"
      :key="index"
      class="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20"
    >
      <div>
        <img width="150" height="150" style="color: transparent" :src="education.image" />
      </div>
      <div>
        <p class="text-lg font-medium">{{ education.degree }}</p>
        <p>{{ education.institution }}</p>
        <p class="mt-1">{{ education.graduation }}</p>
        <ul v-for="(detail, index) in education.details" :key="index" class="list-disc pl-6">
          <li>{{ detail }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
