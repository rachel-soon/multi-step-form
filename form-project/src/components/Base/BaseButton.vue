<script setup lang="ts">
const props = defineProps<{
  variant: string
}>()
</script>

<template>
  <button :class="`${variant}`">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  @apply rounded-lg px-6 py-3;
}
.primary {
  @apply bg-primary text-white;
  transition: 0.1s all ease-in-out;
}

.primary:hover {
  background-color: #034596;
}

.secondary {
  @apply bg-secondary text-white;
  transition: 0.1s all ease-in-out;
}

.secondary:hover {
  background-color: #817aff;
}
</style>
