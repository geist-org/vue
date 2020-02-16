<template lang="pug">
.zi-textarea-container
  .zi-textarea-wrapper
    textarea.zi-textarea(
      :class="[{ disabled }, type]"
      v-model="model"
      @blur="handleBlur"
      :disabled="disabled"
      v-bind="$attrs"
      :rows="rows")
</template>

<script>
import { validator } from '../utils'

export default {
  name: 'zi-textarea',

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
  },

  methods: {
    handleBlur(event) {
      this.$emit('blur', event.target.value)
    },
  },
}
</script>

<style lang="stylus" scoped src="./textarea.styl"/>
