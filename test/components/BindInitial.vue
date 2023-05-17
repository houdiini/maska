<script setup lang="ts">
import { reactive } from 'vue'
import { MaskaDetail, vMaska } from '../../src'

const binded = reactive<Partial<MaskaDetail>>({})
</script>

<template>
  <input v-maska="binded" data-mask="#-#" value="123" />
  <div>{{ binded.masked }}</div>
</template>
