<template lang="pug">
a.zi-footnote(:href="href" :target="target")
  slot
  i.zi-icon-footnote
</template>
<script>
export default {
  name: 'zi-footnote',

  props: {
    href: String,
    target: { type: String, default: '_blank' },
  },
}
</script>
