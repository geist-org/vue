<script>
import * as docs from '#/docs/index'

export default {
  name: 'ex-doc',

  props: {
    docName: { type: String, default: 'about' },
  },

  computed: {
    docComponent() {
      return docs[this.docName] || 'div'
    },
  },

  render(h) {
    return h(this.docComponent)
  },
}
</script>
