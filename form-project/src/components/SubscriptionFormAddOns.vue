<script setup lang="ts">
import { useSubscriptionStore } from '@/stores/subscription'
import { reactive } from 'vue'
import BaseCard from './Base/BaseCard.vue'
const store = useSubscriptionStore()
const planType = store.getBillingType
const addOns = reactive(store.getAddOns)
function toggleSelected(index: number) {
  store.toggleAddOnSelected(index)
}
</script>

<template>
  <div>
    <BaseCard
      v-for="(addOn, index) in addOns"
      :key="addOn.title"
      :active="addOn.selected"
      class="my-4"
      @click="toggleSelected(index)"
    >
      <div class="grid grid-cols-3">
        <div class="flex col-span-2">
          <div class="my-auto mx-3">
            <input
              id="default-checkbox"
              type="checkbox"
              :checked="addOn.selected"
              @click.stop="toggleSelected(index)"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div class="ml-3">
            <div class="text-primary font-medium">{{ addOn.title }}</div>
            <div class="text-sm text-muted">{{ addOn.description }}</div>
          </div>
        </div>

        <div class="text-end my-auto">
          +${{ planType === 'monthly' ? addOn.monthlyPrice : addOn.yearlyPrice }}/{{
            planType === 'monthly' ? 'mo' : 'yr'
          }}
        </div>
      </div>
    </BaseCard>
  </div>
</template>
