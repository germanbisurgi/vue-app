<template>
  <div class="container">
    <app-hero />
    <app-portfolio />
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
