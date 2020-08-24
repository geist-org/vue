<template lang="pug">
div
  p
    zi-link(href="//github.com/geist-org/vue" black) black link
  p
    zi-link(href="//github.com/geist-org/vue" black more) black and more
  zi-link(href="//github.com/geist-org/vue" bold black more) bold link
</template>

<script>
export default {
  name: 'ex-link-style',
}
</script>
