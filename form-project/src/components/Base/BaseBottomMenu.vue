<script setup lang="ts">
import { computed } from 'vue'
import { useSubscriptionStore } from '@/stores/subscription'
import BaseButton from '@/components/Base/BaseButton.vue'

// handling steps
const subscriptionStore = useSubscriptionStore()
const currentStep = computed<number>(() => {
  return subscriptionStore.getStep
})
function nextStep(): void {
  subscriptionStore.increaseStep()
}
function previousStep(): void {
  subscriptionStore.decreaseStep()
}

// handling form submit
const formErrors = computed<Array<Object>>(() => {
  return subscriptionStore.errors
})
function submitForm() {
  subscriptionStore.validateForm()
  // notice the .value here. formErrors is a computed ref object
  // and therefore needs the '.value' keyword
  if (formErrors.value.length === 0) {
    nextStep()
  }
}
</script>

<template>
  <div class="bg-white w-full">
    <div class="form-body__footer">
      <div class="mt-3">
        <span
          v-if="currentStep !== 1"
          @click="previousStep"
          class="text-muted hover:cursor-pointer hover:text-primary font-medium select-none"
        >
          Go Back
        </span>
      </div>
      <div class="flex justify-end">
        <BaseButton v-if="currentStep !== 4" @click="submitForm" variant="primary"
          >Next Step</BaseButton
        >
        <BaseButton v-else variant="secondary" @click="nextStep">Confirm</BaseButton>
      </div>
    </div>
  </div>
</template>
