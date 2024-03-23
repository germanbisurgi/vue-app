<template>
  <div id="app">
    <app-navigation />
    <router-view />
  </div>
</template>

<script>
  import AppNavigation from '@/components/AppNavigation.vue'

  export default {
    components: {
      AppNavigation
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
    @import "scss/main";
</style>
