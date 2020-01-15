<template lang="pug">
.zi-textarea-wrapper
  textarea.zi-textarea(
    :class="{ disabled }"
    v-model="model"
    :placeholder="placeholder"
    @blur="handleBlur"
    :disabled="disabled"
    :rows="rows"
    :cols="cols")
</template>

<script>
export default {
  name: 'zi-textarea',

  props: {
    value: [String, Number],
    placeholder: String,
    disabled: Boolean,
    rows: {
      type: Number,
      default: 3,
    },
    cols: {
      type: Number,
      default: 45,
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
