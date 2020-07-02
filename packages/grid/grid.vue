<template lang="pug">
div(
  :style="styles"
  :class="classes")
  slot
</template>

<script>
import { print, validator } from '../utils'
import flexProps from './flex-passthrough'

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl']

export default {
  name: 'zi-grid',

  props: {
    container: Boolean,

    spacing: Number,

    alignContent: {
      type: String,
      default: 'stretch',
      validator: validator.enums(flexProps.alignContent),
    },

    alignItems: {
      type: String,
      default: 'stretch',
      validator: validator.enums(flexProps.alignItems),
    },

    justify: {
      type: String,
      default: 'flex-start',
      validator: validator.enums(flexProps.justifyContent),
    },

    direction: {
      type: String,
      default: 'row',
      validator: validator.enums(flexProps.flexDirection),
    },

    wrap: {
      type: String,
      default: 'wrap',
      validator: validator.enums(flexProps.flexWrap),
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
    CssFlexProps() {
      const { justify, alignItems, alignContent, direction, wrap } = this.$props
      return {
        'justify-content': justify,
        'align-content': alignContent,
        'flex-direction': direction,
        'flex-wrap': wrap,
        'align-items': alignItems,
      }
    },

    containerWidth() {
      const setWidth = () => ({
        'max-width': `calc(100% + 8px * ${this.spacing})`,
        margin: `-${4 * this.spacing}px`,
      })
      if (this.container) return setWidth()
      if (this.spacing)
        print.error('[Grid Error] The prop [spacing] must be used on [container] mode')
      return {}
    },

    classes() {
      const breakpointsClasses = breakpoints
        .map(item => this[item] === 0 ? `${item}-hidden` : this[item] && `${item}`)
      if (!this.container) return ['grid', ...breakpointsClasses]
      return ['grid-container', ...breakpointsClasses]
    },

    styles() {
      const makeContainerStyle = () => ({
        '--zeit-grid-spacing': `${this.spacing * 4}px`,
        ...this.CssFlexProps,
      })
      return [this.containerWidth, this.container ? makeContainerStyle() : {}].concat(
        this.getItemLayout(),
      )
    },
  },

  methods: {
    getItemLayout() {
      return breakpoints.map(item => {
        const isNumberSize = typeof this.$props[item] === 'number'
        if (!this.$props[item]) return {}
        if (isNumberSize) {
          const width = (100 / 24) * this.$props[item]
          return {
            [`--zeit-${item}-width`]: width > 100 ? '100%' : width < 0 ? '0' : `${width}%`,
            [`--zeit-${item}-grow`]: 0,
            [`--zeit-${item}-basis`]: width > 100 ? '100%' : width < 0 ? '0' : `${width}%`,
          }
        }
        return {
          [`--zeit-${item}-grow`]: 1,
        }
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

.xs-hidden
  display none

@media only screen and (max-width: 650px)
  .xs
    flex-grow var(--zeit-xs-grow)
    flex-basis var(--zeit-xs-basis)
    width var(--zeit-xs-width)

  .xs-hidden
    display none

@media only screen and (min-width: 650px)
  .sm
    flex-grow var(--zeit-sm-grow)
    flex-basis var(--zeit-sm-basis)
    width var(--zeit-sm-width)

  .sm-hidden
    display none

@media only screen and (min-width: 900px)
  .md
    flex-grow var(--zeit-md-grow)
    flex-basis var(--zeit-md-basis)
    width var(--zeit-md-width)

  .md-hidden
    display none

@media only screen and (min-width: 1280px)
  .lg
    flex-grow var(--zeit-lg-grow)
    flex-basis var(--zeit-lg-basis)
    width var(--zeit-lg-width)

  .lg-hidden
    display none

@media only screen and (min-width: 1920px)
  .xl
    flex-grow var(--zeit-xl-grow)
    flex-basis var(--zeit-xl-basis)
    width var(--zeit-xl-width)

  .xl-hidden
    display none
</style>
