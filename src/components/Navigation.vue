<template>
    <nav class="navigation">
        <div class="wrapper">
            <div class="navigation-items">
                <div class="navigation-item" data-scrollspy-feedback="buttons">
                    <router-link to="/">Go to Home</router-link>
                </div>
                <div class="navigation-item" data-scrollspy-feedback="links">
                    <router-link to="/about">Go to About</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
  export default {
    name: 'Navigation'
  }
</script>
