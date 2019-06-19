<template lang="pug">
a.zi-footnote(:href="href" :target="target" :style="[isHelp]"
  @mouseenter="isActive = true" @mouseleave="isActive = false")
  slot
  FootnoteIcon.zi-footnote-icon(:is-active="isActive")
</template>

<script>
import FootnoteIcon from './footnote-icon'

export default {
  name: 'zi-footnote',

  components: { FootnoteIcon },

  data: () => ({
    isActive: false,
  }),

  props: {
    href: String,
    target: { type: String, default: '_blank' },
    help: Boolean,
  },

  computed: {
    isHelp() {
      return this.help ? { cursor: 'help' } : ''
    },
  },
}
</script>

<style lang="stylus" src="./footnote.styl"/>
