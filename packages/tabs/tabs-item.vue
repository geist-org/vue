<template lang="pug">
.zi-tabs-content(v-show="isActive")
  slot
</template>

<script>
import { print } from '../utils'

export default {
  name: 'zi-tabs-item',

  props: {
    label: [String, Number],
    value: [String, Number],
    active: Boolean,
    icon: Object,
  },

  data: () => ({
    isActive: false,
  }),

  computed: {
    inGroup() {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'zi-tabs') {
          this._group = parent
          return true
        }
        parent = parent.$parent
      }
      return false
    },
  },

  mounted() {
    if (!this.inGroup) {
      return print.error(`${this.$options.name} \
      required parent component: [zi-tabs]`)
    }
    this.updateSubscription()
    this._group.appendSubscriber(this.updateSubscription.bind(this))
  },

  watch: {
    title() {
      this._group.appendTabs(false)
    },

    value() {
      this._group.appendTabs(false)
    },
  },

  methods: {
    updateSubscription() {
      this.isActive = this._group.isSelected(this.value)
    },
  },
}
</script>

<style lang="stylus" scoped src="./tabs.styl" />
