<template>
    <div id="app">
        <input v-model="message" type="text">
        <h2 class="message">{{ message }}</h2>
        <h3>One More Message</h3>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Hallo Welt',
      };
    },
  };
</script>

<style>
    #app {
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        color: blue;
    }
</style>
