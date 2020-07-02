export default {
  methods: {
    async copy(val) {
      await this.$copyText(val)
      this.$Toast.success({
        text: `Copied "${val}" to clipboard!`,
      })
    },

    valueToStyle(val) {
      return `background-color: ${val}; color: var(--geist-background);`
    },

    getCSSValue(val) {
      val = val.match(/^var\(([\s\S]*)\)/)[1]
      if (!val) return ''
      return getComputedStyle(document.documentElement).getPropertyValue(val)
    },
  },
}
