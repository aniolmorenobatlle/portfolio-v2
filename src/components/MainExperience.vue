<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const title = computed(() => t('experience.title'))

const experiences = computed(() => [
    {
    role: t('experience.swhosting.title'),
    company: t('experience.swhosting.company'),
    description: t('experience.swhosting.description'),
    dates: t('experience.swhosting.dates'),
  },
  {
    role: t('experience.hipsotech.title'),
    company: t('experience.hipsotech.company'),
    description: t('experience.hipsotech.description'),
    dates: t('experience.hipsotech.dates'),
  },
  {
    role: t('experience.institut-torroella.title'),
    company: t('experience.institut-torroella.company'),
    description: t('experience.institut-torroella.description'),
    dates: t('experience.institut-torroella.dates'),
  }
])
</script>

<template>
  <section id="experience" class="scroll-mt-28 mb-28 sm:mb-40">
    <h2 class="mb-8 text-3xl font-medium text-center capitalize">{{ title }}</h2>
    <div class="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="vertical-timeline-element"
      >
        <span
          class="flex items-center justify-center text-2xl bg-white vertical-timeline-element-icon bounce-in"
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
          class="px-8 py-5 text-left border shadow-none vertical-timeline-element-content bounce-in border-black/5"
        >
          <h3 class="flex items-center justify-between font-semibold capitalize">
            {{ experience.role }}
            <span class="hidden text-center experience-dates-responsive">
              {{ experience.dates }}</span
            >
          </h3>
          <p class="font-normal !mt-0">{{ experience.company }}</p>
          <p class="!mt-1 !font-normal text-gray-700 dark:text-white/75">
            {{ experience.description }}
          </p>
        </div>
        <div class="text-center experience-dates">
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
