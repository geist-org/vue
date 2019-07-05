<template lang="pug">
div(:style="styles" :class="classes")
  slot
</template>

<script>
export default {
  name: 'zi-col',

  props: {
    span: {
      type: [Number, String],
      default: 24,
    },
  },

  computed: {
    gutter() {
      let parent = this.$parent
      while (parent && parent.$options.name !== 'zi-row') {
        parent = parent.$parent
      }
      return parent ? parent.safeGutter : 0
    },

    styles() {
      const style = {}
      if (this.gutter) {
        style.paddingLeft = `${this.gutter / 2}px`
        style.paddingRight = style.paddingLeft
      }
      return style
    },

    safeSpan() {
      if (typeof this.span === 'number') return this.span
      if (Number.isNaN(+this.span)) {
        console.error('zi-col: [span] expected a number.')
        return 24
      }

      return +this.span
    },

    classes() {
      let _class = ''
      _class += ` zi-col-${this.safeSpan}`

      return _class
    },
  },
}
</script>

<style lang="stylus" src="./col.styl"/>
