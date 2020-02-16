<template lang="pug">
div
  zi-badge(count="5" style="margin-right: 20px;")
    zi-avatar(text="W" shape="square")
  zi-badge(count="10" status="type.vue")
    zi-avatar(text="W" shape="square")

  p(style="margin-top: 20px;") you have a&nbsp
    zi-badge(count="10+" status="type.vue" dot)
      a(href="") message
</template>

<script>
export default {
  name: 'ex-badge-combination',
}
</script>
