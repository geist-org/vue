<template lang="pug">
div.zi-switcher
  a(:class="{ active: isSelected(item) }" v-for="item in privateOptions" :key="item.value" @click="select(item)") {{ item.label }}
</template>
<script>
import { print } from '../utils'
export default {
  name: 'zi-switcher',

  props: {
    options: Array,
    switched: [String, Number],
  },

  model: {
    prop: 'switched',
    event: 'switch',
  },

  data: () => ({
    privateOptions: [],
  }),

  created() {
    if (!this.options.length) {
      return print.error('prop :options Cannot be an empty array')
    }

    this.privateOptions = this.options.map(item => {
      return { label: item.label || item, value: item.value || item }
    })
  },

  methods: {
    select(item) {
      this.$emit('switch', item.value)
    },

    isSelected(item) {
      return this.switched === item.value
    },
  },
}
</script>
