<template lang="pug">
div
  zi-avatar(:src="image" style="margin-right: 2px;")
  zi-avatar(:src="image" style="margin-right: 2px;")
  zi-avatar(:src="image" style="margin-right: 2px;")
  zi-avatar(:src="image")
  br
  zi-avatar(:src="image" shape="square" style="margin-right: 2px;")
  zi-avatar(:src="image" shape="square" style="margin-right: 2px;")
  zi-avatar(:src="image" shape="square" style="margin-right: 2px;")
  zi-avatar(:src="image" shape="square")
</template>

<script>
export default {
  name: 'ex-avatar-default',

  created() {
    this.image = '//zeit.co/api/www/avatar/?u=evilrabbit&s=240'
  },
}
</script>
