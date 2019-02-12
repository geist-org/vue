<template lang="pug">
transition(name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave")
  slot
</template>

<script>
import * as bounding from '../bounding'

export default {
  name: 'zi-transition-expand',

  methods: {
    enter(el) {
      const { width } = bounding.getRealShape(el)
      el.style.width = `${width}px`
      el.style.position = 'absolute'
      el.style.visibility = 'hidden'
      el.style.height = 'auto'

      const { height } = bounding.getRealShape(el)
      el.style.width = null
      el.style.position = null
      el.style.visibility = null
      el.style.height = 0

      bounding.getRealShape(el)

      const tiemr = setTimeout(() => {
        el.style.height = `${height}px`
        clearTimeout(tiemr)
      }, 0)

    },

    afterEnter(el) {
      el.style.height = 'auto'
    },

    leave(el) {
      const { height } = bounding.getRealShape(el)
      el.style.height = `${height}px`
      bounding.getRealShape(el)
      const timer = setTimeout(() => {
        el.style.height = 0
        clearTimeout(timer)
      }, 0)
    },

    afterLeave(el) {
      el.style.height = null
    },
  },
}
</script>

<style scope lang="stylus">
.expand-enter-active, .expand-leave-active
  transition height .2s ease
  overflow hidden

.expand-enter, .expand-leave-to
  height 0
</style>
