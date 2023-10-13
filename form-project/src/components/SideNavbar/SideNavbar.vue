<script setup lang="ts">
import SideNavbarStep from './SideNavbarStep.vue'
</script>

<template>
  <div class="navbar col-span-3 md:col-span-1">
    <div class="navbar__steps p-3 pt-10 flex md:flex-col justify-center">
      <div v-for="num in 4" :key="num">
        <SideNavbarStep class="mb-8" :step-num="num"></SideNavbarStep>
      </div>
    </div>
  </div>
</template>

<style scoped>
/** background size to contain the image in the div- but there's still space on the right  */
.navbar {
  background-image: url('@/assets/img/bg-sidebar-desktop.svg');
  background-size: contain;
  background-repeat: no-repeat;
  height: 500px;
}

@media only screen and (max-width: 768px) {
  .navbar {
    background-image: url('@/assets/img/bg-sidebar-mobile.svg');
    background-size: cover;
    height: auto;
  }
}
</style>
