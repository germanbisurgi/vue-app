import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  allowComposition: true,
  messages: {
    en: {
      jobDescription: 'Web Developer'
    },
    de: {
      jobDescription: 'Web Entwickler'
    }
  }
})

export default i18n