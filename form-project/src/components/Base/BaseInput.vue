<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{
  label: string
  modelValue: string
}>()
</script>

<template>
  <div>
    <label :for="label" class="text-sm text-primary">{{ label }}</label>
    <div>
      <input
        type="text"
        class="border-2 w-full py-2 pl-3 rounded-lg"
        :name="label"
        :id="label"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>
