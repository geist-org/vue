<template lang="pug">
a.zi-footnote(:href="href")
  slot
  i.zi-icon-footnote
</template>
<script>
export default {
  name: 'zi-footnote',

  props: {
    href: String,
  },
}
</script>
