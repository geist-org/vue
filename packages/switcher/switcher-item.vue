<template lang="pug">
div(v-show="isActive")
  slot
</template>

<script>
export default {
  name: 'zi-switcher-item',

  props: {
    label: [String, Number],
    active: Boolean,
    disabled: Boolean,
  },

  data: () => ({
    isActive: false,
  }),

  computed: {
    inGroup() {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'zi-switcher') {
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
      required parent component: [zi-switcher]`)
    }
    this._group.appendSubscriber(this.updateSubscription.bind(this))
    this._group.appendLabel(this.label)
    this.active && this._group.select(this.label)
  },

  methods: {
    updateSubscription() {
      this.isActive = this._group.isSelected(this.label)
    },
  },
}
</script>
