<script setup lang="ts">
import BaseCard from './Base/BaseCard.vue'
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <BaseCard>
      <div class="mb-10 mt-2">
        <img src="@/assets/img/icon-arcade.svg" alt="arcade" />
      </div>

      <div class="plan__title">Arcade</div>
      <div class="plan__price text-muted text-sm">$9/mo</div>
    </BaseCard>
    <BaseCard></BaseCard>
    <BaseCard></BaseCard>
    <div class="col-span-3 bg-magnolia w-full mt-2 rounded-md p-3">sdfsdf</div>
  </div>
</template>

<style scoped>
.plan__title {
  @apply text-primary font-bold;
}
</style>
