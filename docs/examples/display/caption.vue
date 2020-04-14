<template lang="pug">
zi-display(shadow)
  img(width="650"
    height="305"
    src="/examples/redirecting-domains.png")
  template(v-slot:caption)
    p A domain redirect that redirects requests made to &nbsp
      zi-code www.zeit.rocks
      |&nbsp to &nbsp
      zi-code zeit.rocks
      |.
</template>

<script>
export default {
  name: 'ex-display-caption',
}
</script>
