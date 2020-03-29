<template lang="pug">
.zi-collapse(:class="{ shadow }")
  .zi-collapse-title(@click="clickHandler")
    h3 {{ title }}
    downIcon.icon(:class="{ reverse: model }")
  zi-transition-expand
    .zi-collapse-content(v-if="model")
      .content
        slot
</template>

<script>
import downIcon from '@zeit-ui/vue-icons/packages/down'
import { print, transitions } from '../utils'

const { ZiTransitionExpand } = transitions

export default {
  name: 'zi-collapse-item',

  components: {
    downIcon,
    ZiTransitionExpand,
  },

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
      default() {
        return this.title
      },
    },
    shadow: Boolean,
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
