<script setup lang="ts">
import BaseCard from './Base/BaseCard.vue'
import { reactive, ref } from 'vue'
import { useSubscriptionStore } from '@/stores/subscription'
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

const subscriptionStore = useSubscriptionStore()
const isYearlyPlan = ref(subscriptionStore.getBillingType === 'yearly')
const plan = ref(subscriptionStore.getPlanType)
function setPlan(planName: string) {
  const selectedPlan = plans.find((plan) => plan.name === planName)

  if (selectedPlan) {
    subscriptionStore.setPlanType(planName)
    plan.value = planName

    if (isYearlyPlan.value === true) {
      subscriptionStore.setPlanPrice(selectedPlan.yearlyPrice)
    } else {
      subscriptionStore.setPlanPrice(selectedPlan.monthlyPrice)
    }
  }
}

function changeBillingType() {
  const selectedPlan = plans.find((item) => item.name === plan.value)
  if (selectedPlan) {
    if (subscriptionStore.getBillingType === 'yearly') {
      subscriptionStore.setBillingType('monthly')
      subscriptionStore.setPlanPrice(selectedPlan?.monthlyPrice)
    } else {
      subscriptionStore.setBillingType('yearly')
      subscriptionStore.setPlanPrice(selectedPlan?.yearlyPrice)
    }
  }
}
</script>

<template>
  <div>
    <div class="grid grid-cols-3 md:gap-4 gap-3 mb-3 m-auto">
      <BaseCard
        v-for="plan in plans"
        :key="plan.name"
        @click="setPlan(plan.name)"
        :active="subscriptionStore.getPlanType === plan.name"
        class="md:col-span-1 col-span-3 flex md:flex-col flex-row items-center md:items-start md:p-4"
      >
        <div class="mb-10 mt-2 my-auto relative top-4 left-3 md:top-0 md:left-0">
          <img :src="plan.icon" :alt="plan.name" />
        </div>
        <div class="ml-8 md:ml-0">
          <div class="plan__title">{{ plan.name }}</div>
          <div class="plan__price text-muted text-sm">
            ${{ isYearlyPlan ? plan.yearlyPrice : plan.monthlyPrice }}/
            {{ isYearlyPlan ? 'yr' : 'mo' }}
            <div
              class="text-primary text-xs mt-1.5 font-medium"
              :class="isYearlyPlan ? 'block' : 'hidden'"
            >
              2 months free
            </div>
          </div>
        </div>
      </BaseCard>
    </div>
    <div
      class="flex justify-center col-span-3 bg-magnolia w-full rounded-md p-3 gap-4 text-sm font-medium text-muted md:mb-3 relative top-4 md:static md:top-0"
    >
      <div :class="{ 'text-primary': !isYearlyPlan }">Monthly</div>
      <label class="relative inline-flex items-center mb-2.5 cursor-pointer mt-0.5">
        <input
          type="checkbox"
          v-model="isYearlyPlan"
          class="sr-only peer"
          @change="changeBillingType"
        />
        <div
          class="w-8 h-4 bg-primary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[6px] after:bg-white after:border after:rounded-full after:h-2.5 after:w-2.5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"
        ></div>
      </label>
      <div :class="{ 'text-primary': isYearlyPlan }">Yearly</div>
    </div>
  </div>
</template>

<style scoped>
.plan__title {
  @apply text-primary font-bold;
}
</style>
