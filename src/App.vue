<template>
    <div id="app">
        <router-link to="/">Go to Home</router-link>
        <router-link to="/about">Go to About</router-link>
        <test></test>
        <router-view></router-view>
    </div>
</template>

<script>
  import Test from './components/Test.vue'

  export default {
    components: {
      Test
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
    @import "scss/main";
</style>
