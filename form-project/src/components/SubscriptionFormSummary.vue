<script setup lang="ts">
import { reactive } from 'vue'
import { useSubscriptionStore } from '@/stores/subscription'

const store = useSubscriptionStore()

const billing = reactive(store.getBilling)
</script>

<template>
  <div>
    <div class="bg-magnolia rounded-md p-5">
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

      <div class="grid grid-cols-2 text-sm my-2">
        <div class="text-muted">Online service</div>
        <div class="text-end">+$1/mo</div>
      </div>
    </div>

    <div class="grid grid-cols-2 p-5">
      <div class="text-muted font-sm text-sm">Total (per month)</div>
      <div class="text-lg text-secondary font-bold text-end">+$12/mo</div>
    </div>
  </div>
</template>
