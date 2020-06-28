<template lang="pug">
label.zi-checkbox-container(:class="{ disabled: isDisabled }")
  checked.zi-checkbox(v-if="model" :class="{ disabled: isDisabled }" size="15")
  unchecked.zi-checkbox(v-if="!model" :class="{ disabled: isDisabled }" size="15")
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
import unchecked from '@zeit-ui/vue-icons/packages/checkbox'
import checked from '@zeit-ui/vue-icons/packages/checkbox-fill'

export default {
  name: 'zi-checkbox',

  components: {
    unchecked,
    checked,
  },

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

<style lang="stylus" src="./checkbox.styl"></style>
