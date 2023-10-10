import { defineStore } from 'pinia'

// define own data types
type FormData = {
  name: string
  email: string
  phone: string
}

export const useSubscriptionStore = defineStore('subscriptionForm', {
  state: () => {
    return {
      step: 1,
      form: {
        name: '',
        email: '',
        phone: ''
      } as FormData,
      errors: [] // push key-value pairs inside here
    }
  },

  getters: {
    getStep: (state) => state.step,
    getName: (state) => state.form.name,
    getEmail: (state) => state.form.email,
    getPhone: (state) => state.form.phone,

    getErrors: (state) => state.errors
  },

  actions: {
    increaseStep() {
      this.step < 4 ? this.step++ : null
    },
    decreaseStep() {
      this.step > 1 ? this.step-- : null
    },

    validateForm() {
      const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

      if (this.errors.length > 0) {
        this.errors.length = 0
      }
      // personal info
      if (this.step === 1) {
        if (this.form.name?.trim() === '') {
          this.errors.push({ name: 'This field is required' })
        }
        if (this.form.email?.trim() === '') {
          this.errors.push({ email: 'This field is required' })
        } else if (!emailRegex.test(this.form.email)) {
          this.errors.push({ email: 'Invalid email format' })
        }
        if (this.form.phone?.trim() === '') {
          this.errors.push({ phone: 'This field is required' })
        }
      }
    }
  }
})
