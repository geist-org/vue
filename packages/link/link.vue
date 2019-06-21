<template lang="pug">
span(class="zi-link-wrapper")
  a(:href="hrefValue" @click="goto" :target="target" :rel="relValue" :class="{ 'no-decoration': this.more, bold, 'default-color': this.more }").zi-link
    slot
  span.zi-link-more(v-if="!pure && more") →
  a(class="zi-link-default")
    <svg v-if="!pure && !more" width="13" height="13" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" stroke-width="0.8" fill="none" fill-rule="evenodd"><path d="M6.2 6.7l5-5.3" stroke-linecap="square"></path><g stroke-linecap="square"><path d="M7.9.9h4M11.9.9v4"></path></g><path d="M9.9 7.4v2.5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5c0-1.1.9-2 2-2h2.5"></path></g></svg>
</template>

<script>
export default {
  name: 'zi-link',

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
