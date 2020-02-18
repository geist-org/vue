<template lang="pug">
.zi-card(:class="[{ hoverable }]" v-on="$listeners")
  slot
</template>

<script>
export default {
  name: 'zi-card',

  props: {
    hoverable: Boolean,
  },
}
</script>

<style lang="stylus" src="./card.styl"/>
