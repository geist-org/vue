<template lang="pug">
div.zi-rate(:class="{ disabled }")
  i.zi-rate-star(
    v-for="index in 5"
    :key="index"
    @click="clickHandler(index)"
    @mousemove="!disabled && (hoverIndex = index)"
    @mouseleave="hoverIndex = 0"
    :class="[classes(index), { disabled }]"
  )
</template>

<script>
export default {
  name: 'zi-rate',

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

    classes(index) {
      let str = ''
      str = index <= this.model ? ' zi-icon-star active' : ' zi-icon-star-off'
      if (index <= this.hoverIndex) {
        str += ' hover'
      }
      return str
    },
  },
}
</script>
