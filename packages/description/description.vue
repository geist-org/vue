<template lang="pug">
dl.zi-description
  dt.zi-description-title {{ title }}
  dd.zi-description-content(v-if="hasSlot")
    slot
  dd.zi-description-content(v-else) {{ content }}
</template>

<script>
export default {
  name: 'zi-description',

  props: {
    title: String,
    content: String,
  },

  computed: {
    hasSlot() {
      return !!this.$slots.default
    },
  },
}
</script>

<style lang="stylus" src="./description.styl"/>
