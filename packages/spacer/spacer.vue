<template lang="pug">
span.zi-spacer(:style="{ marginLeft,  marginTop }")
</template>

<script>
export default {
  name: 'zi-spacer',

  props: {
    x: Number,
    y: Number,
  },

  computed: {
    marginLeft() {
      if (this.x < 0) {
        console.error('[Spacer Error]x must be greater than or equal to 0')
        return
      }
      return `calc(${this.x * 15.25}pt + 1px * ${this.x - 1})`
    },

    marginTop() {
      if (this.y < 0) {
        console.error('[Spacer Error]y must be greater than or equal to 0')
        return
      }
      return `calc(${this.y * 15.25}pt + 1px * ${this.y - 1})`
    },
  },
}
</script>

<style scoped lang="stylus" src="./spacer.styl"/>
