<script setup>
import { ref } from 'vue'
import { vMaska } from '../../src'

const data = ref('1234')
</script>

<template>
  <input v-maska data-mask="##-#" v-model="data" data-mask-eager />
  <button @click="data = '5678'">Set</button>
</template>
