<script setup lang="ts">
import { reactive } from 'vue'
import { useSubscriptionStore } from '@/stores/subscription'
import BaseInput from './Base/BaseInput.vue'

const subscriptionStore = useSubscriptionStore()

const formData = reactive({
  name: subscriptionStore.getName,
  email: subscriptionStore.getEmail,
  phone: subscriptionStore.getPhone
})
</script>

<template>
  <div>
    <BaseInput v-model="formData.name" label="Name" type="text" class="mb-4"></BaseInput>
    <BaseInput v-model="formData.email" label="Email Address" type="email" class="mb-4"></BaseInput>
    <BaseInput v-model="formData.phone" label="Phone Number" type="text" class="mb-4"></BaseInput>
  </div>
</template>
