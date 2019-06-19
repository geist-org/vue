<template lang="pug">
div(:class="[groupClass, { prefix: hasPrefix, suffix: hasSuffix, clearable }]")
  span.zi-label.prefix(v-if="prefixLabel") {{ prefixLabel }}
  span.zi-label.prefix(v-if="prefixIcon")
    i(:class="prefixIcon")
  input.zi-input(
    :class="[{ 'disabled': disabled }, size && size]"
    v-model="model"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :autofocus="autofocus"
    :autocomplete="autocomplete"
    :spellcheck="spellcheck"
    :form="form"
    :type="type"
    @focus="showCloseIcon = true"
    @blur.self="hiddenCloseIcon"
  )
  span.zi-label.suffix(v-if="suffixLabel") {{ suffixLabel }}
  span.zi-label.suffix(v-if="suffixIcon")
    i(:class="suffixIcon")
  DeleteIcon.close(v-if="clearable && showCloseIcon" @click="clear" :dark="isDark")
</template>

<script>
import DeleteIcon from '@zeit-ui/vue-icons/packages/delete'
import { validator, theme } from '../utils'

export default {
  name: 'zi-input',

  data: () => ({
    privateModel: '',
    showCloseIcon: false,
    isDark: theme.getCurrentTheme().includes('dark'),
  }),

  components: { DeleteIcon },

  props: {
    value: [String, Number],
    placeholder: [String, Number],
    clearable: Boolean,
    prefixIcon: String,
    suffixIcon: String,
    prefixLabel: [String, Number],
    suffixLabel: [String, Number],
    disabled: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    spellcheck: Boolean,
    form: String,
    autocomplete: {
      type: String,
      validator: validator.enums(['on', 'off']),
      default: 'off',
    },
    size: {
      type: String,
      validator: validator.enums(['mini', 'small', 'medium', 'big']),
    },
    type: {
      type: String,
      default: 'text',
    },
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
      return this.prefixIcon || this.prefixLabel
    },

    hasSuffix() {
      return this.suffixIcon || this.suffixLabel
    },

    groupClass() {
      return this.hasPrefix || this.hasSuffix ? 'zi-input-group' : 'zi-input-group-empty'
    },
  },

  mounted() {
    theme.subscribeChange(name => this.updateTheme(name))
  },

  methods: {
    clear() {
      if (!this.clearable) return
      this.model = ''
    },

    hiddenCloseIcon() {
      const timer = setTimeout(() => {
        this.showCloseIcon = false
        clearTimeout(timer)
      }, 50)
    },

    updateTheme(name) {
      this.isDark = name.includes('dark')
    },
  },
}
</script>

<style lang="stylus" src="./input.styl"/>
