<template lang="pug">
.zi-collapse
  .zi-collapse-title(@click="clickHandler")
    h3 {{ title }}
    i(:class="model ? 'zi-icon-minus' : 'zi-icon-plus'")
  zi-transition-expand
    .zi-collapse-content(v-if="model" style="padding: 0")
      slot
</template>

<script>
import { print, transitions } from '../utils'
const { ZiTransitionExpand } = transitions

export default {
  name: 'zi-collapse-item',

  components: { ZiTransitionExpand },

  data: () => ({
    privateModel: false,
  }),

  props: {
    title: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: [String, Number],
      default() { return this.title },
    },
  },

  mounted() {
    if (!this.inGroup) {
      return print.error(`${this.$options.name} \
      required parent component: [zi-collapse]`)
    }
  },

  computed: {
    model: {
      get() {
        if (!this.inGroup) return false
        if (!Array.isArray(this._group.model)) return this._group.model === this.name
        return !!this._group.model.find(item => item === this.name)
      },

      set(val) {
        this._group.setValue(this.name, val)
      },
    },

    inGroup() {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'zi-collapse') {
          this._group = parent
          return true
        }
        parent = parent.$parent
      }
      return false
    },
  },

  methods: {
    clickHandler() {
      this.model = !this.model
    },
  },
}
</script>
