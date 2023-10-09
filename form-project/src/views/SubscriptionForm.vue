<script setup lang="ts">
import { computed } from 'vue'
import { useCounterStore } from '@/stores/counter'
import FormSideNav from '@/components/FormSideNav.vue'

const subscriptionStore = useCounterStore()

const currentStep = computed(() => {
  return subscriptionStore.getStep
})
function nextStep() {
  subscriptionStore.increaseStep()
}
function previousStep() {
  subscriptionStore.decreaseStep()
}
</script>

<template>
  <div class="bg-white w-8/12 rounded-xl grid grid-cols-3">
    <FormSideNav></FormSideNav>
    <div class="cols-span-2">this is the form card</div>
    <button class="border-2" @click="nextStep">Increase step</button>
    <button class="border-2" @click="previousStep">Decrease step</button>
    <div>{{ currentStep }}</div>
  </div>
</template>
