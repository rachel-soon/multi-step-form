<script setup lang="ts">
import { defineProps, ref, computed, watch } from 'vue'
import { useSubscriptionStore } from '@/stores/subscription'
const subscriptionStore = useSubscriptionStore()

const props = defineProps<{
  label: string
  modelValue: string
  field: string // for error handling
  placeholder: string
}>()

// error handling
const hasError = ref(false)
const errorMsg = ref('')
const formErrors = computed(() => {
  return subscriptionStore.getErrors
})

watch(formErrors.value, () => {
  for (let error of formErrors.value) {
    if (Object.keys(error)[0] === props.field) {
      hasError.value = true
      errorMsg.value = Object.values(error)[0]
    }
  }
})

// check the store - if there is an error then set this value to true
</script>

<template>
  <div>
    <div class="grid grid-cols-2">
      <label :for="label" class="text-sm text-primary">{{ label }}</label>
      <div
        class="text-sm text-end text-red-600 font-medium"
        :class="hasError ? 'inline-block error' : 'hidden'"
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
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<style scoped>
.error {
  transition: 0.1s all ease-in-out;
  @apply border-red-300;
}
</style>
