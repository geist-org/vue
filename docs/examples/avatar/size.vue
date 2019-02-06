<template lang="pug">
div
  zi-avatar(:src="image" size="small")
  zi-avatar(:src="image")
  zi-avatar(:src="image" size="big")
  zi-avatar(:src="image" size="huge")
</template>

<script>
export default {
  name: 'ex-avatar-size',

  created() {
    this.image = '//zeit.co/api/www/avatar/?u=evilrabbit&s=240'
  },
}
</script>
