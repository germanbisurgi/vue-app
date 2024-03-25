<template>
  <nav class="app-footer">
    <router-link v-for="route in routes" :key="route.name" :to="route.path">
      <span>{{ route.name }}</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    routes() {
      return this.$router.options.routes.filter((route) => route.meta.footer)
    }
  }
}
</script>
