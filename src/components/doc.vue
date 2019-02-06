<script>
import docs from '#/docs/index'

console.log(docs)

export default {
  name: 'ex-doc',

  props: {
    docName: { type: String, default: 'about' },
  },

  computed: {
    docComponent() {
      const docModule = this.findDocModule(docs, new RegExp(this.docName))
      return docModule || 'div'
    },
  },

  methods: {
    findDocModule(docs, reg) {
      const doc = docs.find(item => item.default && reg.test(item.default.name))
      if (doc && doc.default) return doc.default
      return docs.reduce((collect, item) => {
        if (!item.children) return collect
        return this.findDocModule(item.children, reg) || collect
      }, null)
    },
  },

  render(h) {
    return h(this.docComponent)
  },
}
</script>
