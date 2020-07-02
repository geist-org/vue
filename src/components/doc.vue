<script>
import docs from '#/docs/index'

export default {
  name: 'ex-doc',

  data: () => ({
    language: 'en-us',
  }),

  props: {
    docName: { type: String, default: 'introduction' },
  },

  created() {
    const languages = Object.keys(docs)
    const param = `${this.$route.params.language}`.toLowerCase()
    if (languages.includes(param)) {
      this.language = param
    }
  },

  computed: {
    docComponent() {
      const currentDocs = docs[this.language]
      return this.findDocModule(currentDocs, this.docName) || 'div'
    },
  },

  methods: {
    findDocModule(docs, docName) {
      return docs.map(docModule => docModule.default).find(content => content.docName === docName)
    },

    safeComponentName(component) {
      if (!component.name) return component
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
