<template lang="pug">
span(class="zi-link-wrapper")
  a(:href="hrefValue"
    @click="goto"
    :target="target"
    :rel="relValue"
    :class="{ 'no-decoration': more, bold, color }"
  ).zi-link
    slot
  span.zi-link-more(v-if="!pure && more" :class="{ color }") →
  a(class="zi-link-default")
    LinkIcon(v-if="!pure && !more" :color="color")
</template>

<script>
import LinkIcon from './link-icon'

export default {
  name: 'zi-link',

  components: {
    LinkIcon,
  },

  props: {
    href: String,
    to: [String, Object],
    more: Boolean,
    bold: Boolean,
    pure: Boolean,
    color: Boolean,
    target: { type: String, default: '_blank' },
    rel: { type: String },
  },

  computed: {
    relValue() {
      if (this.rel) return this.rel
      return 'bookmark'
    },

    hrefValue() {
      if (this.to) return 'javascript: void 0;'
      return this.href
    },
  },

  methods: {
    goto() {
      if (!this.$router || !this.to) return
      this.$router.push(this.to)
    },
  },
}
</script>

<style lang="stylus" src="./link.styl"/>
