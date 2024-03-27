<template>
  <nav class="app-navbar">
    <app-language-selector />
    <router-link v-for="route in routes" :key="route.name" class="app-navbar-item" :to="route.path">
      {{ route.name }}
    </router-link>
    <a class="app-navbar-item" target="_blank" href="https://github.com/germanbisurgi">GitHub</a>
  </nav>
</template>

<script>
import AppLanguageSelector from "./AppLanguageSelector.vue";
export default {
  name: 'AppNavbar',
  components: {
    AppLanguageSelector
  },
  computed: {
    routes() {
      return this.$router.options.routes.filter((route) => route.meta.navbar)
    }
  }
}
</script>
