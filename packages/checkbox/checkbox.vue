<template lang="pug">
label.zi-checkbox-container(:class="classes")
  span.zi-checkbox(:class="classes")
  input.zi-checkbox-original(
    type="checkbox"
    :disabled="isDisabled"
    v-model="model"
  )
  span.zi-checkbox-label
    template(v-if="!$slots.default") {{ label }}
    slot
</template>

<script>
export default {
  name: 'zi-checkbox',

  data: () => ({
    _model: false,
  }),

  props: {
    label: {
      type: [String, Boolean, Number],
    },
    value: Boolean,
    disabled: Boolean,
  },

  computed: {
    model: {
      get() {
        if (this.inGroup) return !!this._group.model.find(item => item === this.label)
        if (this.value !== undefined) return this.value
        return this._model
      },
      set(status) {
        if (this.inGroup) return this._group.setLabelStatus(this.label, status)
        this._model = status
        this.$emit('input', status)
      },
    },

    isDisabled() {
      if (!this.inGroup) return this.disabled
      return this._group.disabled || this.disabled
    },

    classes() {
      let str = ''
      this.model && (str += ' checked')
      this.isDisabled && (str += ' disabled')
      return str
    },

    inGroup() {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'zi-checkbox-group') {
          this._group = parent
          return true
        }
        parent = parent.$parent
      }
      return false
    },
  },
}
</script>
