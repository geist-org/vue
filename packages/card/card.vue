<template lang="pug">
.zi-card(:class="[{ hoverable, shadow }]" v-on="$listeners")
  slot
</template>

<script>
export default {
  name: 'zi-card',

  props: {
    hoverable: Boolean,
    shadow: Boolean,
  },
}
</script>

<style lang="stylus" src="./card.styl"/>
