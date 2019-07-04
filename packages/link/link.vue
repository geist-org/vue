<template lang="pug">
span(class="zi-link-wrapper")
  a(:href="hrefValue" @click="goto" :target="target" :rel="relValue" :class="{ 'no-decoration': this.more, bold, 'default-color': this.more }").zi-link
    slot
  span.zi-link-more(v-if="!pure && more") →
  a(class="zi-link-default")
    externalLink(v-if="!pure && !more")
</template>

<script>
import externalLink from '@zeit-ui/vue-icons/packages/external-link'

export default {
  name: 'zi-link',

  components: {
    externalLink,
  },

  props: {
    href: String,
    to: [String, Object],
    more: Boolean,
    nofollow: Boolean,
    bold: Boolean,
    pure: Boolean,
    target: { type: String, default: '_blank' },
    rel: { type: String },
  },

  computed: {
    relValue() {
      if (this.rel) return this.rel
      if (this.nofollow) return 'nofollow'
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
