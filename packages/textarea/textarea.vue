<template lang="pug">
.zi-textarea-container
  .zi-textarea-wrapper
    textarea.zi-textarea(
      :class="[{ disabled }, type]"
      v-model="model"
      :disabled="disabled"
      v-on="customListeners"
      v-bind="$attrs"
      :rows="rows")
</template>

<script>
import { validator } from '../utils'

export default {
  name: 'zi-textarea',

  inheritAttrs: true,

  props: {
    value: [String, Number],
    disabled: Boolean,
    rows: {
      type: Number,
      default: 3,
    },
    type: {
      type: String,
      validator: validator.enums(['primary', 'danger', 'success', 'warning']),
      default: 'primary',
    },
  },

  data: () => ({
    privateModel: '',
  }),

  computed: {
    model: {
      get() {
        return this.value === undefined ? this.privateModel : this.value
      },

      set(val) {
        this.privateModel = val
        this.$emit('input', val)
      },
    },

    customListeners() {
      const newListeners = {}
      Object.keys(this.$listeners).forEach(listener => {
        if(listener !== 'input') newListeners[listener] = this.$listeners[listener]
      })
      return newListeners
    },
  },
}
</script>

<style lang="stylus" scoped src="./textarea.styl"/>
