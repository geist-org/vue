<template lang="pug">
div
</template>

<script>
export default {
  name: 'zi-col',

  props: {
    span: {
      type: Number,
      default: 24,
    },
  },

  computed: {
    classes() {
      let _class = ''
      _class += ` zi-col-${this.span}`

      return _class
    },
  },
}
</script>

<style lang="stylus" src="./col.styl"/>
