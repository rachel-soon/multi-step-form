<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  active: boolean
}>()
</script>

<template>
  <div class="card hover:border-primary hover:cursor-pointer" :class="{ 'selected-state': active }">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  @apply border bg-white rounded-lg p-4;
  transition: 0.1s all ease-in;
}

.selected-state {
  @apply border border-primary bg-magnolia;
}
</style>
