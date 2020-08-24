<template lang="pug">
div
  .zi-switcher
    a(v-for="(label, index) in labels" :key="label + index" @click="select(label)" :class="{ active: isSelected(label) }")
      |{{ label }}
  .zi-switcher-content
    slot
</template>
<script>
import { print } from '../utils'

export default {
  name: 'zi-switcher',

  data: () => ({
    labels: [],
    currentActive: '',
    subscribers: [],
  }),

  created() {
    console.warn(
      '[geist-ui]: **DEPRECATION**: <zi-switcher> will be discarded. Please use <zi-tabs> instead of it',
    )
  },

  methods: {
    appendLabel(label) {
      if (this.labels.find(item => item === label)) {
        return print.error(`[zi-switcher] > Duplicate label (${label})`)
      }
      this.labels.push(label)

      // select first label by default
      if (this.labels.length === 1) {
        this.select(label, true)
      }
    },

    appendSubscriber(handler) {
      this.subscribers.push(handler)
    },

    isSelected(label) {
      return this.currentActive === label
    },

    select(label, slient = false) {
      if (!slient && this.currentActive !== label) {
        this.$emit('label-selected', label)
      }

      this.currentActive = label
      this.subscribers.forEach(item => {
        if (typeof item !== 'function') return
        item()
      })
    },
  },
}
</script>

<style lang="stylus" src="./switcher.styl" />
