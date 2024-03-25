<template>
  <div>
    <app-hero />
    <app-portfolio />
    <img src="@/assets/vue-logo.png" alt="A green V">
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import AppPortfolio from '@/components/AppPortfolio.vue'

export default {
  name: 'AppHome',
  components: {
    AppHero,
    AppPortfolio
  }
}
</script>
