<template lang="pug">
.zi-card(:class="[dark && 'zi-dark', { pin }]")
  slot
</template>

<script>
export default {
  name: 'zi-card',

  props: {
    dark: Boolean,
    pin: Boolean,
  },
}
</script>

<style lang="stylus" src="./card.styl"/>
