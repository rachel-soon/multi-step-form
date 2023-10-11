<script setup lang="ts">
import SideNavbar from '@/components/SideNavbar/SideNavbar.vue'
import SubscriptionForm from '@/components/SubscriptionForm.vue'
import ThankYou from '@/views/ThankYou.vue'
import { useSubscriptionStore } from '@/stores/subscription'

const store = useSubscriptionStore()
</script>

<template>
  <div class="form-body">
    <SideNavbar class="form-body__nav"></SideNavbar>
    <SubscriptionForm v-if="store.getStep !== 5"></SubscriptionForm>
    <ThankYou v-else class="col-span-2"></ThankYou>
  </div>
</template>
