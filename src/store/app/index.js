import { defineStore } from 'pinia'

const useAppStore = defineStore('counter', {
  state: () => ({
    languages: ['en', 'de'],
  }),
  getters: {},
  actions: {}
})

export default useAppStore
