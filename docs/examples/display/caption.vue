<template lang="pug">
zi-display(shadow)
  img(width="650"
    height="305"
    src="https://zeit.co/docs/static/docs/custom-domains/redirecting-domains.png")
  template(v-slot:caption)
    p A domain redirect that redirects requests made to
      zi-code www.zeit.rocks
      |to
      zi-code zeit.rocks
</template>

<script>
export default {
  name: 'ex-display-caption',
}
</script>
