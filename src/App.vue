<template>
  <div>
    <app-navbar />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    AppNavbar,
    AppFooter
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import "scss/main";
</style>
