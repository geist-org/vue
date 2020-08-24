<template lang="pug">
zi-display(shadow)
  img(width="650"
    height="305"
    src="/examples/redirecting-domains.png")
  template(v-slot:caption)
    p A domain redirect that redirects requests made to &nbsp
      zi-code geist-ui.dev
      |&nbsp to &nbsp
      zi-code geist-ui.dev
      |.
</template>

<script>
export default {
  name: 'ex-display-caption',
}
</script>
