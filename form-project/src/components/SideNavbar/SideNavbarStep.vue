<script setup lang="ts">
import { computed } from 'vue'
import { useSubscriptionStore } from '@/stores/subscription'

const subscriptionStore = useSubscriptionStore()
const currentStep = computed<number>(() => {
  return subscriptionStore.getStep
})

const props = defineProps<{
  stepNum: number
}>()

const getStepTitle = computed(() => {
  switch (props.stepNum) {
    case 1:
      return 'YOUR INFO'
    case 2:
      return 'SELECT PLAN'
    case 3:
      return 'ADD-ONS'
    case 4:
      return 'SUMMARY'
    default:
      return ''
  }
})
</script>

<template>
  <div class="flex">
    <div class="mt-1.5 text-sm font-bold mx-1">
      <span
        class="rounded-full py-1.5 pb-2 px-2.5 mx-3 my-2"
        :class="currentStep === stepNum ? 'active' : 'outlined'"
      >
        {{ stepNum }}
      </span>
    </div>
    <div class="flex flex-col text-white">
      <div class="uppercase text-xs text-light-gray">Step {{ stepNum }}</div>
      <div class="uppercase -mt-1 font-medium tracking-wider text-sm">{{ getStepTitle }}</div>
    </div>
  </div>
</template>

<style scoped>
.outlined {
  @apply border-2 text-light-gray;
  transition: 0.2s all ease-in-out;
}
.active {
  @apply bg-light-blue border-2 border-light-gray;
}
</style>
