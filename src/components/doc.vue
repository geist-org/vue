<script>
import docs from '#/docs/index'

export default {
  name: 'ex-doc',

  props: {
    docName: { type: String, default: 'about' },
  },

  computed: {
    docComponent() {
      return this.findDocModule(docs, this.docName) || 'div'
    },
  },

  methods: {
    findDocModule(docs, docName) {
      const reg = new RegExp(docName)
      return docs
        .map(docModule => docModule.default)
        .find(content => reg.test(content.name))
    },
  },

  render(h) {
    return h(this.docComponent)
  },
}
</script>
