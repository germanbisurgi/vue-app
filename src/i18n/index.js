import { createI18n } from 'vue-i18n'

const index = createI18n({
  locale: 'en',
  messages: {
    en: {
      home: 'Home',
      about: 'About'
    },
    de: {
      home: 'Home',
      about: 'About'
    }
  }
})

export default index