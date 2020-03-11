<template lang="pug">
div(:class="[groupClass, { prefix: hasPrefix, suffix: hasSuffix, clearable }]")
  span.zi-label.prefix(v-if="prefixLabel" :class="size && size") {{ prefixLabel }}
  span.zi-label.prefix(v-if="hasPrefixIcon" :class="size && size")
    slot(name="prefixIcon")
  input.zi-input(
    :class="[{ 'disabled': disabled }, size && size, type]"
    v-model="model"
    :disabled="disabled"
    :type="_type"
    v-bind="$attrs"
    v-on="customListeners"
    @focus="showCloseIcon = true"
    @blur.self="hiddenCloseIcon"
  )
  span.zi-label.suffix(v-if="suffixLabel" :class="size && size") {{ suffixLabel }}
  span.zi-label.suffix(v-if="hasSuffixIcon" :class="size && size")
    slot(name="suffixIcon")
  DeleteIcon.close(v-if="clearable && showCloseIcon" @mousedown="clear")
</template>

<script>
import DeleteIcon from '@zeit-ui/vue-icons/packages/delete'
import { validator } from '../utils'

export default {
  name: 'zi-input',

  data: () => ({
    privateModel: '',
    showCloseIcon: false,
  }),

  components: { DeleteIcon },

  props: {
    value: [String, Number],
    clearable: Boolean,
    prefixIcon: String,
    suffixIcon: String,
    prefixLabel: [String, Number],
    suffixLabel: [String, Number],
    disabled: Boolean,
    size: {
      type: String,
      validator: validator.enums(['mini', 'small', 'medium', 'big']),
    },
    type: {
      type: String,
      validator: validator.enums(['primary', 'success', 'warning', 'danger']),
      default: 'primary',
    },
    _type: String,
  },

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

    hasPrefix() {
      return this.hasPrefixIcon || this.prefixLabel
    },

    hasPrefixIcon() {
      return !!this.$slots.prefixIcon
    },

    hasSuffix() {
      return this.hasSuffixIcon || this.suffixLabel
    },

    hasSuffixIcon() {
      return !!this.$slots.suffixIcon
    },

    groupClass() {
      return this.hasPrefix || this.hasSuffix ? 'zi-input-group' : 'zi-input-group-empty'
    },

    customListeners() {
      const newListeners = {}
      Object.keys(this.$listeners).forEach(listener => {
        if (listener !== 'input') newListeners[listener] = this.$listeners[listener]
      })
      return newListeners
    },
  },

  methods: {
    clear() {
      if (!this.clearable) return
      this.model = ''
    },

    hiddenCloseIcon() {
      this.showCloseIcon = false
    },
  },
}
</script>

<style lang="stylus" src="./input.styl"/>
