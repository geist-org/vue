<template lang="pug">
option(:disabled="isDisabled" :value="value") {{ showLabel }}
</template>

<script>
export default {
  name: 'zi-option',

  props: {
    value: {
      type: [String, Number, Object],
      required: true,
    },
    label: [String, Number],
    disabled: Boolean,
  },

  computed: {
    showLabel() {
      return this.label || this.value
    },

    isDisabled() {
      if (!this.inGroup) return this.disabled
      return this._group.disabled || this.disabled
    },

    inGroup() {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'zi-select') {
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
      return print.type(`${this.$options.name} \
      required parent component: [zi-select]`)
    }
  },
}
</script>
