<template>
    <div id="app">
        <navigation></navigation>
        <router-view></router-view>
    </div>
</template>

<script>
  import Navigation from './components/Navigation.vue'

  export default {
    components: {
      Navigation
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
    @import "scss/main";
</style>
