<script setup lang="ts">
import SideNavbar from '@/components/SideNavbar/SideNavbar.vue'
import SubscriptionForm from '@/components/SubscriptionForm.vue'
import BaseBottomMenu from '@/components/Base/BaseBottomMenu.vue'
import ThankYou from '@/views/ThankYou.vue'
import { useSubscriptionStore } from '@/stores/subscription'

const store = useSubscriptionStore()
</script>

<template>
  <div class="form-body">
    <SideNavbar class="form-body__nav"></SideNavbar>
    <SubscriptionForm v-if="store.getStep !== 5"></SubscriptionForm>
    <ThankYou v-else class="col-span-2"></ThankYou>
    <BaseBottomMenu class="block md:hidden absolute bottom-0 p-4 px-5"></BaseBottomMenu>
  </div>
</template>
