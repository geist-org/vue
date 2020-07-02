<template lang="pug">
.zi-toggle(@click="clickHandler" :class="{ checked: !!model, disabled }")
</template>

<script>
export default {
  name: 'zi-toggle',

  data: () => ({
    privateModel: undefined,
  }),

  props: {
    value: [String, Number, Boolean],
    disabled: Boolean,
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
  },

  methods: {
    clickHandler() {
      this.model = !this.model
    },
  },
}
</script>

<style lang="stylus" src="./toggle.styl" />
