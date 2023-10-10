<script setup lang="ts">
import { reactive } from 'vue'
import { useSubscriptionStore } from '@/stores/subscription'
import BaseInput from './Base/BaseInput.vue'

const subscriptionStore = useSubscriptionStore()

const formData = reactive(subscriptionStore.form)
</script>

<template>
  <div>
    <BaseInput
      v-model="formData.name"
      label="Name"
      type="text"
      class="mb-4"
      field="name"
      placeholder="e.g. Stephen King"
    ></BaseInput>
    <BaseInput
      v-model="formData.email"
      label="Email Address"
      type="email"
      class="mb-4"
      field="email"
      placeholder="e.g. stephenking@lorem.com"
    ></BaseInput>
    <BaseInput
      v-model="formData.phone"
      label="Phone Number"
      type="text"
      class="mb-4"
      field="phone"
      placeholder="e.g. +1 234 567 890"
    ></BaseInput>
  </div>
</template>
