<template lang="pug">
a(class="zi-footnote" :href="href")
  slot
</template>
<script>
export default {
  name: 'zi-footnote',

  props: {
    href: String,
  },
}
</script>
