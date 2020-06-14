<template lang="pug">
div(
  :style="styles"
  :class="classes")
  slot
</template>

<script>
import { print, validator } from '../utils'

export default {
  name: 'zi-grid',

  props: {
    container: Boolean,

    spacing: Number,

    alignContent: {
      type: String,
      default: 'stretch',
      validator: validator.enums(['flex-start', 'flex-end', 'stretch', 'space-between', 'space-around']),
    },

    alignItems: {
      type: String,
      default: 'stretch',
      validator: validator.enums(['flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
    },

    justify: {
      type: String,
      default: 'flex-start',
      validator: validator.enums(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
    },

    direction: {
      type: String,
      default: 'row',
      validator: validator.enums(['row', 'row-reverse', 'column', 'column-reverse']),
    },

    wrap: {
      type: String,
      default: 'wrap',
      validator: validator.enums(['nowrap', 'wrap', 'wrap-reverse']),
    },

    lg: {
      type: [Number, Boolean],
      default: false,
    },

    xl: {
      type: [Number, Boolean],
      default: false,
    },

    md: {
      type: [Number, Boolean],
      default: false,
    },

    xs: {
      type: [Number, Boolean],
      default: false,
    },

    sm: {
      type: [Number, Boolean],
      default: false,
    },
  },

  computed: {
    breakpoints() {
      return ['xs', 'sm', 'md', 'lg', 'xl'].filter(item => this.$props[item])
    },

    flexConf() {
      const { justify, alignItems, alignContent, direction, wrap } = this.$props
      return {
        'justify-content': justify,
        'align-content': alignContent,
        'flex-direction': direction,
        'flex-wrap': wrap,
        'align-items': alignItems,
      }
    },

    spacingConf() {
      if (this.container) return { 'width': `calc(100% + 8px * ${this.spacing})`, 'margin': `-${4 * this.spacing}px` }
      if (this.spacing) print.error('[Grid Error] The prop [spacing] must be used on [container] mode')
      return {}
    },

    classes() {
      if (!this.container) {
        return ['grid',
          this.xs && 'xs',
          this.sm && 'sm',
          this.md && 'md',
          this.lg && 'lg',
          this.xl && 'xl']
      }
      if (this.breakpoints.length) {
        print.error(`[Grid Error] The prop [${this.breakpoints[0]}] must be used on [item] mode`)
      }
      return 'grid-container'
    },

    styles() {
      return [this.spacingConf,
        this.container ? { '--zeit-grid-spacing': `${this.spacing * 4}px`, ...this.flexConf } : {}]
        .concat(this.getItemLayout())
    },
  },

  methods: {
    getItemLayout() {
      return ['xs', 'sm', 'md', 'lg', 'xl'].map(item => {
        const sizes = {}
        if (typeof this.$props[item] === 'number') {
          const width = 100 / 24 * this.$props[item]
          sizes[`--zeit-${item}-width`] = width > 100 ? '100%' : width < 0 ? '0' : `${width}%`
          sizes[`--zeit-${item}-grow`] = 0
          sizes[`--zeit-${item}-basis`] = width > 100 ? '100%' : width < 0 ? '0' : `${width}%`
        }
        if (this.$props[item] && typeof this.$props[item] !== 'number') sizes[`--zeit-${item}-grow`] = 1
        return sizes
      })
    },
  },
}
</script>

<style scoped lang="stylus">
.grid-container
  display flex
  box-sizing border-box

.grid
  padding var(--zeit-grid-spacing)

.xs
  flex-grow var(--zeit-xs-grow)
  flex-basis var(--zeit-xs-basis)
  width var(--zeit-xs-width)

@media only screen and (max-width: 650px)
  .xs
    flex-grow var(--zeit-xs-grow)
    flex-basis var(--zeit-xs-basis)
    width var(--zeit-xs-width)

@media only screen and (min-width: 650px)
  .sm
    flex-grow var(--zeit-sm-grow)
    flex-basis var(--zeit-sm-basis)
    width var(--zeit-sm-width)

@media only screen and (min-width: 900px)
  .md
    flex-grow var(--zeit-md-grow)
    flex-basis var(--zeit-md-basis)
    width var(--zeit-md-width)

@media only screen and (min-width: 1280px)
  .lg
    flex-grow var(--zeit-lg-grow)
    flex-basis var(--zeit-lg-basis)
    width var(--zeit-lg-width)

@media only screen and (min-width: 1920px)
  .xl
    flex-grow var(--zeit-xl-grow)
    flex-basis var(--zeit-xl-basis)
    width var(--zeit-xl-width)
</style>
