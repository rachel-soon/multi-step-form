<script setup lang="ts">
import { computed } from 'vue'
import { useSubscriptionStore } from '@/stores/subscription'
import SubscriptionFormPersonalInfo from '@/components/SubscriptionFormPersonalInfo.vue'
import SubscriptionFormPlan from '@/components/SubscriptionFormPlan.vue'
import SubscriptionFormAddOns from '@/components/SubscriptionFormAddOns.vue'
import SubscriptionFormSummary from '@/components/SubscriptionFormSummary.vue'

import BaseBottomMenu from './Base/BaseBottomMenu.vue'
import ThankYou from '@/components/ThankYou.vue'

// handling steps
const subscriptionStore = useSubscriptionStore()
const currentStep = computed<number>(() => {
  return subscriptionStore.getStep
})

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
    case 5:
      return ThankYou
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
  <div class="col-span-2 form-body__form pt-6 pb-2 md:pl-12 md:pr-16 px-10 m-auto">
    <div class="form-body__heading">
      <div class="form-body__title">{{ getTitle }}</div>
      <div class="form-body__subtitle mb-4">{{ getSubtitle }}</div>
    </div>
    <component :is="getComponent"></component>
    <BaseBottomMenu v-if="currentStep !== 5" class="invisible md:visible"></BaseBottomMenu>
  </div>
</template>
