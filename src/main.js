import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import Cookies from 'js-cookie'

import ca from './i18n/ca.json'
import en from './i18n/en.json'
import es from './i18n/es.json'

const defaultLocale = Cookies.get('locale') || 'en'

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  messages: { ca, en, es },
})

createApp(App).use(i18n).mount('#app')
