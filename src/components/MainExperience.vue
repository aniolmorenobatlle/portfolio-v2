<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const title = computed(() => t('experience.title'))

const experiences = [
  {
    role: 'Web Developer',
    company: 'M3 Digital - Contract',
    description: `
      Front-end development for a variety of Shopify stores such as FitazFK, Rider Collective,
      Masseuse Massage, Francesca Jewellery and Salty Captain. Developed high quality landing
      pages and front end features using HTML, CSS, SCSS, JavaScript and Liquid.
    `,
    dates: 'September 2021 - February 2022',
  },
  {
    role: 'Junior Developer',
    company: 'YouPay',
    description: `
      Developed new features using Laravel, Vue.js, PHP, JavaScript, Tailwind CSS, MySQL and
      REST APIs. Created an email notification system for mechants to receive weekly/monthly
      summaries of YouPay carts created, paid and cancelled. I also integrated YouPay into
      dozens of stores.
    `,
    dates: 'February 2022 - November 2022',
  },
  {
    role: 'Software Engineer',
    company: 'The University of Queensland',
    description: `
      Full-stack software engineer in the Application Development and Support team. Worked on
      web applications such as CAHP (Casual Academic Hire and Payment), UQ Maps, UQ Donations,
      and Programs and Courses.
    `,
    dates: 'November 2022 - January 2024',
  },
]
</script>

<template>
  <section id="experience" class="scroll-mt-28 mb-28 sm:mb-40">
    <h2 class="text-3xl font-medium capitalize mb-8 text-center">{{ title }}</h2>
    <div class="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="vertical-timeline-element"
      >
        <span
          class="vertical-timeline-element-icon bounce-in bg-white text-2xl flex items-center justify-center"
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 7C17 5.34315 15.6569 4 14 4H10C8.34315 4 7 5.34315 7 7H6C4.34315 7 3 8.34315 3 10V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H17ZM14 6H10C9.44772 6 9 6.44772 9 7H15C15 6.44772 14.5523 6 14 6ZM6 9H18C18.5523 9 19 9.44772 19 10V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V10C5 9.44772 5.44772 9 6 9Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <div
          style="background: #f3f4f6"
          class="vertical-timeline-element-content bounce-in shadow-none border border-black/5 text-left py-5 px-8"
        >
          <h3 class="font-semibold capitalize flex justify-between items-center">
            {{ experience.role }}
            <span class="experience-dates-responsive text-center hidden">
              {{ experience.dates }}</span
            >
          </h3>
          <p class="font-normal !mt-0">{{ experience.company }}</p>
          <p class="!mt-1 !font-normal text-gray-700 dark:text-white/75">
            {{ experience.description }}
          </p>
        </div>
        <div class="experience-dates text-center">
          <p>{{ experience.dates }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vertical-timeline {
  width: 95%;
  max-width: 1170px;
  margin: 0 auto;
  position: relative;
  padding: 2em 0;
  display: flex;
  flex-direction: column;
}

.vertical-timeline:before {
  content: '';
  position: absolute;
  top: 0;
  left: 18px;
  height: 100%;
  width: 4px;
  background: #e5e7eb;
}

.vertical-timeline-element {
  position: relative;
  margin: 2em 0;
  display: flex;
  flex-direction: row;
}

.experience-dates.text-center {
  margin-top: 20px;
  opacity: 0.7;
  font-size: 1rem;
}

.vertical-timeline-element:nth-child(even) {
  flex-direction: row-reverse;
}

.vertical-timeline-element:nth-child(even) .vertical-timeline-element-content {
  margin-left: 110px;
}

.vertical-timeline-element:nth-child(odd) .vertical-timeline-element-content {
  margin-right: 110px;
}

.vertical-timeline-element:first-child {
  margin-top: 0;
}

.vertical-timeline--animate .vertical-timeline-element-icon.bounce-in,
.vertical-timeline--animate .vertical-timeline-element-content.bounce-in {
  visibility: visible;
  -webkit-animation: cd-bounce-1 0.6s;
  animation: cd-bounce-1 0.6s;
}

.vertical-timeline-element-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow:
    0 0 0 4px #fff,
    inset 0 2px 0 rgba(0, 0, 0, 0.08),
    0 3px 0 4px rgba(0, 0, 0, 0.05);
  transform: translateZ(0);
  backface-visibility: hidden;
}

.vertical-timeline-element-content {
  position: relative;
  margin-left: 60px;
  background: #fff;
  border-radius: 0.25em;
  padding: 1em;
  box-shadow: 0 3px 0 #ddd;
}

.vertical-timeline-element-content-arrow {
  border-right: 0.4rem solid #9ca3af;
}

.vertical-timeline-element-content:nth-child(odd) {
  margin-left: 0;
  margin-right: 60px;
}

.vertical-timeline * {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.vertical-timeline-element-content .vertical-timeline-element-date {
  position: absolute;
  font-size: 13px;
  font-weight: 500;
  opacity: 0.7;
  padding: 0.8em 0;
  display: inline-block;
  text-align: center;
}

.vertical-timeline-element:nth-child(odd)
  .vertical-timeline-element-content
  .vertical-timeline-element-date {
  left: 0;
  right: auto;
}

.vertical-timeline-element:nth-child(even)
  .vertical-timeline-element-content
  .vertical-timeline-element-date {
  right: 0;
  left: auto;
}

.vertical-timeline * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

@media only screen and (min-width: 1170px) {
  .vertical-timeline--two-columns
    .vertical-timeline-element.vertical-timeline-element--right
    .vertical-timeline-element-content
    .vertical-timeline-element-date,
  .vertical-timeline--two-columns
    .vertical-timeline-element:nth-child(2n):not(.vertical-timeline-element--left)
    .vertical-timeline-element-content
    .vertical-timeline-element-date {
    left: auto;
    right: 124%;
    text-align: right;
  }

  .vertical-timeline--two-columns
    .vertical-timeline-element-content
    .vertical-timeline-element-date {
    position: absolute;
    width: 100%;
    left: 124%;
    top: 6px;
    font-size: 16px;
    font-size: 1rem;
  }

  .vertical-timeline {
    width: 90%;
  }

  .vertical-timeline:before {
    left: 50%;
    margin-left: -2px;
  }

  .vertical-timeline--two-columns .vertical-timeline-element-icon {
    width: 60px;
    height: 60px;
    left: 50%;
    margin-left: -30px;
  }

  .vertical-timeline--two-columns .vertical-timeline-element-content {
    margin-left: 0;
    padding: 1.5em;
    width: 44%;
  }
}

@media only screen and (min-width: 768px) {
  .vertical-timeline-element-content .vertical-timeline-element-date {
    font-size: 14px;
    font-size: 0.875rem;
  }
}

@media only screen and (max-width: 1170px) {
  .experience-dates-responsive.text-center {
    display: flex;
    opacity: 0.7;
    font-size: 0.75rem;
  }

  .vertical-timeline-element:nth-child(odd) .vertical-timeline-element-content {
    margin-right: 0;
  }

  .vertical-timeline-element:nth-child(even) .vertical-timeline-element-content {
    margin-left: 60px;
  }

  .experience-dates.text-center {
    display: none;
  }
}
</style>
