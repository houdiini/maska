<script setup lang="ts">
import { reactive } from 'vue'
import { MaskInputOptions, vMaska } from '../../src'

const config = reactive<MaskInputOptions>({
  preProcess: (val) => val.toUpperCase()
})
</script>

<template>
  <input v-maska:[config] data-mask="A A" data-mask-tokens="A:[A-Z]:multiple" />
</template>
