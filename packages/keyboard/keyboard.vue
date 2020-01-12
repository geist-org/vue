<template lang="pug">
kbd(class="zi-kbd" :class="{ 'zi-kbd-small': small }")
  span(v-if="shift") ⇧
  span(v-if="isOption") ⌥
  span(v-if="command") ⌘
  span(v-if="ctrl") ⌃
  span(v-if="$slots.default")
    slot
</template>

<script>
export default {
  name: 'zi-kbd',

  props: {
    shift: Boolean,
    alt: Boolean,
    option: Boolean,
    command: Boolean,
    ctrl: Boolean,
    small: Boolean,
  },

  computed: {
    isOption() {
      return this.alt || this.option
    },
  },
}
</script>

<style lang="stylus" src="./keyboard.styl"/>
