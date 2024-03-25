<template>
  <nav class="app-navbar">
    <router-link v-for="route in routes" :key="route.name" class="app-navbar-item" :to="route.path">
      {{ route.name }}
    </router-link>
    <a class="app-navbar-item" target="_blank" href="https://github.com/germanbisurgi">GitHub</a>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  computed: {
    routes() {
      return this.$router.options.routes.filter((route) => route.meta.navbar)
    }
  }
}
</script>
