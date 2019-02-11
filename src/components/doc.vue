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

    safeComponentName(component) {
      if (component.name && component.name.startsWith('md-')) {
        return component
      }
      component.name = `md-${component.name}`
      return component
    },
  },

  render(h) {
    const safeComponent = this.safeComponentName(this.docComponent)
    return h(safeComponent)
  },
}
</script>
