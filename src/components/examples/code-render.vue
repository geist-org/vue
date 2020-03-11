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
  overflow-y auto
</style>
