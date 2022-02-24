<template>
    <div>
        <input v-model="message" type="text">
        <h2 class="message">{{ message }}</h2>
        <h3>One More Message</h3>
    </div>
</template>

<script>
  export default {
    name: 'Test',
    data() {
      return {
        message: 'Hallo Welt',
      };
    },
  };
</script>
