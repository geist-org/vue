<script>
export default {
  props: {
    name: { type: String },
  },

  computed: {
    tag() {
      return this.name || 'div'
    },
  },

  render(h) {
    return h(this.tag)
  },
}
</script>

<style lang="stylus">
pre
  max-width 90vw
  overflow-y auto
</style>
