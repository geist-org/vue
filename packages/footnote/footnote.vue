<template lang="pug">
a.zi-footnote(:href="href" :target="target" :style="[isCursor]")
  slot
  i.zi-icon-footnote
</template>

<script>
export default {
  name: 'zi-footnote',

  props: {
    href: String,
    target: { type: String, default: '_blank' },
    cursor: Boolean,
  },

  computed: {
    isCursor() {
      return this.cursor ? { cursor: 'help' } : ''
    },
  },
}
</script>
