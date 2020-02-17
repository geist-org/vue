<template lang="pug">
div
  zi-badge(count="150" :max-count="100" status="type.vue" style="margin-right: 20px;")
    zi-avatar(shape="square" :src="image")
  zi-badge(count="0" status="error" style="margin-right: 20px;")
    zi-avatar(shape="square" :src="image")
  zi-badge(count="0" status="error" show-zero)
    zi-avatar(shape="square" :src="image")
</template>

<script>
export default {
  name: 'ex-badge-limit',

  created() {
    this.image = '//zeit.co/api/www/avatar/?u=evilrabbit&s=240'
  },
}
</script>
