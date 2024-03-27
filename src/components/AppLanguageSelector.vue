<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="lang in languages" :key="lang" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'AppLanguageSelector',
  data () {
    return { languages: ['en', 'de'] }
  }
}
</script>
