<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{
  label: string
  modelValue: string
  errorMsg: string
  hasError: boolean
}>()
</script>

<template>
  <div>
    <div class="grid grid-cols-2">
      <label :for="label" class="text-sm text-primary">{{ label }}</label>
      <div
        class="text-sm text-end text-red-600 font-medium"
        :class="hasError ? 'inline-block' : 'hidden'"
      >
        {{ errorMsg }}
      </div>
    </div>
    <div>
      <input
        type="text"
        class="border-2 w-full py-2 pl-3 rounded-lg"
        :class="{ error: hasError }"
        :name="label"
        :id="label"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<style scoped>
.error {
  @apply border-red-300;
}
</style>
