<template lang="pug">
.zi-textarea-container
  .zi-textarea-wrapper
    textarea.zi-textarea(
      :class="{ disabled, error }"
      v-model="model"
      :placeholder="placeholder"
      @blur="handleBlur"
      :disabled="disabled"
      :readonly="readonly"
      :autofocus="autofocus"
      :form="form",
      :rows="rows")
</template>

<script>
export default {
  name: 'zi-textarea',

  props: {
    value: [String, Number],
    placeholder: String,
    disabled: Boolean,
    error: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    form: String,
    rows: {
      type: Number,
      default: 3,
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

<style lang="stylus" src="./textarea.styl"/>
