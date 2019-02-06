<script>
export default {
  name: 'ex-code-render',

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
