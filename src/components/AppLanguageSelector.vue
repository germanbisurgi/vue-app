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
import { mapState } from 'pinia'
import useAppStore from '@/store/app'

export default {
  name: 'AppLanguageSelector',
  computed: {
    ...mapState(useAppStore, [
        'languages'
    ])
  }
}
</script>
