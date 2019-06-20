<template>
  <svg width="24" height="12" viewBox="0 0 24 12">
    <path :fill="isDark ? '#000' : '#fff'" stroke-width="1px" :stroke="isDark ? '#333' : '#fff'" fill-rule="evenodd"
      d="M20 12l-8-8-12 12"></path>
  </svg>
</template>

<script>
import { theme } from '../utils'

export default {
  name: 'zi-popover-icon',

  data: () => ({
    isDark: theme.getCurrentTheme().includes('dark'),
  }),

  mounted() {
    theme.subscribeChange(name => this.updateTheme(name))
  },

  methods: {
    updateTheme(name) {
      this.isDark = name.includes('dark')
    },
  },
}
</script>
