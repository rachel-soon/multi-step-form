<script setup lang="ts">
import { computed } from 'vue'
import { useSubscriptionStore } from '@/stores/subscription'
import SubscriptionFormPersonalInfo from '@/components/SubscriptionFormPersonalInfo.vue'
import SubscriptionFormPlan from '@/components/SubscriptionFormPlan.vue'
import SubscriptionFormAddOns from '@/components/SubscriptionFormAddOns.vue'
import SubscriptionFormSummary from '@/components/SubscriptionFormSummary.vue'

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

// dynamic rendering based on steps
const getComponent = computed(() => {
  switch (currentStep.value) {
    case 1:
      return SubscriptionFormPersonalInfo
    case 2:
      return SubscriptionFormPlan
    case 3:
      return SubscriptionFormAddOns
    case 4:
      return SubscriptionFormSummary
  }
})
const getTitle = computed(() => {
  switch (currentStep.value) {
    case 1:
      return 'Personal info'
    case 2:
      return 'Select your plan'
    case 3:
      return 'Pick add-ons'
    case 4:
      return 'Finishing up'
  }
})
const getSubtitle = computed(() => {
  switch (currentStep.value) {
    case 1:
      return 'Please provide your name, email address, and phone number.'
    case 2:
      return 'You have the option of monthly or yearly billing.'
    case 3:
      return 'Add-ons help enhance your gaming experience.'
    case 4:
      return 'Double-check everything looks OK before confirming.'
  }
})

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
  <div class="col-span-2 form-body__form pt-6 pb-2 pl-12 pr-16">
    <div class="form-body__heading">
      <div class="form-body__title">{{ getTitle }}</div>
      <div class="form-body__subtitle">{{ getSubtitle }}</div>
    </div>
    <component :is="getComponent"></component>
    <div class="form-body__footer">
      <div class="mt-2">
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
