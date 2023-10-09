import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('subscriptionForm', {
  state: () => {
    return { step: 1 }
  },

  getters: {
    getStep: (state) => state.step
  },

  actions: {
    increaseStep() {
      this.step < 4 ? this.step++ : null
    },
    decreaseStep() {
      this.step > 1 ? this.step-- : null
    }
  }
})
