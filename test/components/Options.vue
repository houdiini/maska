<script lang="ts">
import { vMaska } from '../../src'

export default {
  data() {
    return {
      binded: {
        masked: ''
      }
    }
  },
  directives: {
    maska: vMaska
  }
}
</script>

<template>
  <input v-maska="binded" data-mask="#-#" />
  <div>{{ binded.masked }}</div>
</template>
