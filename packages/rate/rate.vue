<template lang="pug">
div.zi-rate(:class="{ disabled }")
  RateIcon.zi-rate-icon(
    v-for="index in 5"
    :key="index"
    :is-active="isActive(index)"
    @click="clickHandler(index)"
    @mousemove="!disabled && (hoverIndex = index)"
    @mouseleave="hoverIndex = 0"
    :class="[classes(index), { disabled }]"
  )
</template>

<script>
import RateIcon from './rate-icon'

export default {
  name: 'zi-rate',

  components: { RateIcon },

  data: () => ({
    privateModel: undefined,
    hoverIndex: 0,
  }),

  props: {
    value: Number,
    disabled: Boolean,
  },

  computed: {
    model: {
      get() {
        return this.privateModel || this.value
      },

      set(val) {
        this.privateModel = val
        this.$emit('input', val)
      },
    },
  },

  watch: {
    value(next) {
      this.privateModel = next
    },
  },

  methods: {
    clickHandler(index) {
      if (this.disabled) return
      this.model = index
    },

    isActive(index) {
      return index <= this.model
    },

    classes(index) {
      let str = ''
      str = index <= this.model ? 'active' : ' '
      if (index <= this.hoverIndex) {
        str += ' hover'
      }
      return str
    },
  },
}
</script>

<style lang="stylus" src="./rate.styl"/>
