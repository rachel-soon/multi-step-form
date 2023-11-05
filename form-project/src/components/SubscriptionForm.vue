<script setup lang="ts">
import { computed } from 'vue'
import { useSubscriptionStore } from '@/stores/subscription'
import SubscriptionFormPersonalInfo from '@/components/SubscriptionFormPersonalInfo.vue'
import SubscriptionFormPlan from '@/components/SubscriptionFormPlan.vue'
import SubscriptionFormAddOns from '@/components/SubscriptionFormAddOns.vue'
import SubscriptionFormSummary from '@/components/SubscriptionFormSummary.vue'

// import BaseButton from '@/components/Base/BaseButton.vue'
import BaseBottomMenu from './Base/BaseBottomMenu.vue'

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
  <div class="col-span-2 form-body__form pt-6 pb-2 pl-12 pr-16 left-3">
    <div class="form-body__heading">
      <div class="form-body__title">{{ getTitle }}</div>
      <div class="form-body__subtitle">{{ getSubtitle }}</div>
    </div>
    <component :is="getComponent"></component>
    <BaseBottomMenu class="invisible md:visible"></BaseBottomMenu>
  </div>
</template>
