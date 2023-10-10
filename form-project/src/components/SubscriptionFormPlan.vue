<script setup lang="ts">
import BaseCard from './Base/BaseCard.vue'
import { reactive } from 'vue'
import arcadeIcon from '@/assets/img/icon-arcade.svg'
import advancedIcon from '@/assets/img/icon-advanced.svg'
import proIcon from '@/assets/img/icon-pro.svg'
const plans = reactive([
  {
    name: 'Arcade',
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: arcadeIcon
  },
  {
    name: 'Advanced',
    monthlyPrice: 12,
    yearlyPrice: 120,
    icon: advancedIcon
  },
  {
    name: 'Pro',
    monthlyPrice: 15,
    yearlyPrice: 150,
    icon: proIcon
  }
])
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <BaseCard v-for="plan in plans" :key="plan.name">
      <div class="mb-10 mt-2">
        <img :src="plan.icon" :alt="plan.name" />
      </div>
      <div class="plan__title">{{ plan.name }}</div>
      <div class="plan__price text-muted text-sm">${{ plan.monthlyPrice }}/mo</div>
    </BaseCard>

    <div class="col-span-3 bg-magnolia w-full mt-2 rounded-md p-3"></div>
  </div>
</template>

<style scoped>
.plan__title {
  @apply text-primary font-bold;
}
</style>
