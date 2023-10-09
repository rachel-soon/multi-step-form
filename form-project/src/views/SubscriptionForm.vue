<script setup lang="ts">
import { computed } from 'vue'
import { useCounterStore } from '@/stores/counter'
import FormSideNav from '@/components/FormSideNav.vue'
import SubscriptionFormPersonalInfo from '@/components/SubscriptionFormPersonalInfo.vue'
import SubscriptionFormPlan from '@/components/SubscriptionFormPlan.vue'
import SubscriptionFormAddOns from '@/components/SubscriptionFormAddOns.vue'
import SubscriptionFormSummary from '@/components/SubscriptionFormSummary.vue'

import BaseButton from '@/components/BaseButton.vue'

// handling steps
const subscriptionStore = useCounterStore()
const currentStep = computed<number>(() => {
  return subscriptionStore.getStep
})
function nextStep(): void {
  subscriptionStore.increaseStep()
}
function previousStep(): void {
  subscriptionStore.decreaseStep()
}
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
</script>

<template>
  <div class="form-body">
    <FormSideNav class="form-body__nav"></FormSideNav>
    <div class="col-span-2 form-body__form pt-8 px-10">
      <div class="form-body__heading">
        <div class="form-body__title">{{ getTitle }}</div>
        <div class="form-body__subtitle">{{ getSubtitle }}</div>
      </div>

      <component :is="getComponent"></component>
      <div class="form-body__footer">
        <div>
          <span
            v-if="currentStep !== 1"
            @click="previousStep"
            class="text-muted hover:cursor-pointer"
          >
            Go Back
          </span>
        </div>
        <div class="flex justify-end">
          <BaseButton v-if="currentStep !== 4" @click="nextStep" variant="primary"
            >Next Step</BaseButton
          >
          <BaseButton v-else variant="secondary">Confirm</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
