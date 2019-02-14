<template lang="pug">
div.zi-switcher
  a(
    :class="{ active: isSelected(item) }"
    v-for="item in privateOptions"
    :key="item.value"
    @click="select(item)"
  )
    |{{ item.label }}
</template>
<script>
import { print } from '../utils'

export default {
  name: 'zi-switcher',

  props: {
    options: Array,
    value: [String, Number],
  },

  data: () => ({
    privateOptions: [],
    privateModel: undefined,
  }),

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

  created() {
    if (!this.options.length) {
      return print.error(`${this.$options.name} prop :options Cannot be an empty array`)
    }

    this.privateOptions = this.options.map(item => {
      return { label: item.label || item, value: item.value || item }
    })
  },

  methods: {
    select(item) {
      this.model = item.value
    },

    isSelected(item) {
      return this.model === item.value
    },
  },

  watch: {
    value(newVal) {
      this.privateModel = newVal
    },
  },
}
</script>
