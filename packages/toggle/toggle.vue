<template lang="pug">
.zi-toggle(@click='clickHandler', :class='[{ checked: !!model, disabled }, size]', ref='ziToggle')
  .inner(:style='{ width: innerSwitchRect, height: innerSwitchRect }')
</template>

<script>
export default {
  name: 'zi-toggle',
  mounted() {
    const width = this.$refs.ziToggle.getBoundingClientRect().height + 'px'
    const basic = '2px'
    this.innerSwitchRect = `calc(${width} - ${basic})`
  },

  data: () => ({
    privateModel: undefined,
    innerSwitchRect: '',
  }),

  props: {
    value: [String, Number, Boolean],
    disabled: Boolean,
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['mini', 'medium', 'large'].indexOf(value) !== -1
      },
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
  },

  methods: {
    clickHandler() {
      this.model = !this.model
    },
  },
}
</script>

<style lang="stylus" src="./toggle.styl" />
