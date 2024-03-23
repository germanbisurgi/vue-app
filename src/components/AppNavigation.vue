<template>
  <nav class="navigation">
    <div class="wrapper">
      <div class="navigation-items">
        <div class="navigation-item" data-scrollspy-feedback="buttons">
          <router-link to="/">
            Home
          </router-link>
        </div>
        <div class="navigation-item" data-scrollspy-feedback="links">
          <router-link to="/about">
            About
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'AppNavigation'
  }
</script>
