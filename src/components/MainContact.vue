<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const title = computed(() => t('contact.title'))
const email = computed(() => t('contact.email'))
const message = computed(() => t('contact.message'))
const send = computed(() => t('contact.send'))
const sendSuccess = computed(() => t('contact.send-success'))
const close = computed(() => t('contact.exit'))

const modalRef = ref(null)
const emailInput = ref(null)
const messageInput = ref(null)

const onSubmit = async (event) => {
  event.preventDefault();

  const recaptchaResponse = document.querySelector('.g-recaptcha-response').value;
  if (!recaptchaResponse) {
    alert("Si us plau, completa el reCAPTCHA abans d'enviar.");
    return;
  }

  const formData = new FormData(event.target);
  formData.append('g-recaptcha-response', recaptchaResponse);

  fetch('https://formsubmit.co/b45270b8fa8e5fdda8d5b9f4039c3f98', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        if (modalRef.value) modalRef.value.showModal();
      }
    })
    .catch((error) => {
      console.error('Error al enviar el formulari:', error);
    });
};

const closeModal = () => {
  if (modalRef.value) {
    modalRef.value.close()
  }

  emailInput.value.value = ''
  messageInput.value.value = ''
}

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://www.google.com/recaptcha/api.js';
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
});
</script>

<template>
  <section id="contact" class="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center" style="opacity: 1">
    <h2 class="text-3xl font-medium capitalize mb-8 text-center">{{ title }}</h2>

    <form @submit="onSubmit" class="mt-10 flex flex-col dark:text-black">
      <input type="text" name="_honey" style="display: none" />

      <input type="hidden" name="_captcha" value="false" />

      <input
        ref="emailInput"
        class="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        type="email"
        required
        maxlength="50"
        :placeholder="email"
        name="senderEmail"
      />
      <textarea
        ref="messageInput"
        class="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        name="message"
        :placeholder="message"
        required
        maxlength="5000"
      ></textarea>

      <div class="g-recaptcha mb-3" data-sitekey="6LdolLIqAAAAAGBAtatiqKxPtWND7pEQIcQtq7wF"></div>

      <button
        type="submit"
        class="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      >
        {{ send }}
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          class="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
          ></path>
        </svg>
      </button>
    </form>

  </section>

  <dialog ref="modalRef" class="modal">
    <div class="modal-box">
      <p class="py-4">{{ sendSuccess }}</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn" @click="closeModal">{{ close }}</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.borderBlack {
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
}
</style>
