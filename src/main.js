import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

// Import translations
import ca from './i18n/ca.json'
import en from './i18n/en.json'
import es from './i18n/es.json'

// Create the i18n instance
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    ca,
    en,
    es,
  },
})

createApp(App).use(i18n).mount('#app')
