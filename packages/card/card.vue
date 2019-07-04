<template lang="pug">
.zi-card(:class="[dark && 'zi-dark', { hoverable }]")
  slot
</template>

<script>
export default {
  name: 'zi-card',

  props: {
    dark: Boolean,
    hoverable: Boolean,
    pin: Boolean,
  },
}
</script>

<style lang="stylus" src="./card.styl"/>
