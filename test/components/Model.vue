<script setup lang="ts">
import { ref } from 'vue'
import { vMaska } from '../../src'

const value = ref('123')
</script>

<template>
  <input v-maska data-mask="#-#" data-mask-eager v-model="value" />
  <div>{{ value }}</div>
</template>
