<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useSubscriptionStore } from '@/stores/subscription'

const store = useSubscriptionStore()
const billing = reactive(store.getBilling)
const addOns = reactive(store.getAddOns)

const total = computed(() => {
  let price = store.getPlanPrice

  for (let addOn of store.getAddOns) {
    if (addOn.selected) {
      price += billing.billingType === 'monthly' ? addOn.monthlyPrice : addOn.yearlyPrice
    }
  }

  return price
})
</script>

<template>
  <div>
    <div class="bg-magnolia rounded-md p-4">
      <div class="grid grid-cols-2">
        <div class="font-medium">
          {{ billing.planType }} ({{ billing.billingType }})
          <div class="text-muted font-medium text-sm underline">Change</div>
        </div>
        <div class="flex justify-end content-center my-auto font-bold">
          ${{ billing.planPrice }}/{{ billing.billingType === 'monthly' ? 'mo' : 'yr' }}
        </div>
      </div>
      <hr class="my-5" />

      <div v-for="addOn in addOns" :key="addOn.title">
        <div v-if="addOn.selected" class="grid grid-cols-2 text-sm my-2">
          <div class="text-muted">{{ addOn.title }}</div>
          <div class="text-end">
            +${{ billing.billingType === 'monthly' ? addOn.monthlyPrice : addOn.yearlyPrice }}/{{
              billing.billingType === 'monthly' ? 'mo' : 'yr'
            }}
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 p-5">
      <div class="text-muted font-sm text-sm">
        Total (per {{ billing.billingType === 'monthly' ? 'month' : 'year' }})
      </div>
      <div class="text-lg text-secondary font-bold text-end">
        +${{ total }}/{{ billing.billingType === 'monthly' ? 'mo' : 'yr' }}
      </div>
    </div>
  </div>
</template>
