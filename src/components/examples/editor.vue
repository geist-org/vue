<script>
import CodeMirror from 'codemirror'
import 'codemirror/mode/vue/vue'

const DEFAULT_OPTIONS = {
  mode: 'text/x-vue',
  tabSize: 2,
}

export default {
  name: 'ex-editor',

  props: ['code', 'options'],

  render(h) {
    return h('div', null, [
      h('textarea', { ref: 'textarea' }, this.code),
    ])
  },

  mounted() {
    this.currentOptions = Object.assign(DEFAULT_OPTIONS)
    this.editor = CodeMirror.fromTextArea(this.$refs.textarea, this.currentOptions)
    this.editor.on('change', this.handleChange)
  },

  watch: {
    code(val) {
      val !== this.editor.getValue() && this.editor.setValue(val)
    },
  },

  methods: {
    handleChange() {
      this.$emit('change', this.editor.getValue())
    },
  },
}
</script>

<style lang="stylus">
@import '~codemirror/lib/codemirror.css'
</style>
