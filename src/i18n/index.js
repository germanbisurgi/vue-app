import { createI18n } from 'vue-i18n'

const index = createI18n({
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

export default index