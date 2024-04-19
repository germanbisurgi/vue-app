<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar-inner">
        <div class="navbar-brand">
          <router-link to="/">
            <img src="@/assets/vue-logo.png" alt="A green V">
          </router-link>
        </div>
        <nav class="navbar-nav">
          <app-language-selector />
          <router-link v-for="route in routes" :key="route.name" class="navbar-item" :to="route.path">
            {{ $t(route.name) }}
          </router-link>
          <a class="navbar-item" target="_blank" href="https://github.com/germanbisurgi/vue-app-template">GitHub</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import AppLanguageSelector from "@/components/AppLanguageSelector.vue"

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
