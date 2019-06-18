<template lang="pug">
pre(:class="{ 'zi-dark': dark, 'zi-bash': bash }" v-if="isBlock")
  slot
code(v-else)
  slot
</template>

<script>
export default {
  name: 'zi-code',

  props: {
    bash: Boolean,
    dark: Boolean,
    block: Boolean,
    inline: Boolean,
  },

  computed: {
    isBlock() {
      if (this.inline) return false
      return this.bash || this.dark || this.block
    },
  },
}
</script>

<style lang="stylus" src="./code.styl"></style>
