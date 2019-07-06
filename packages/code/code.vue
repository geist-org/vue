<template lang="pug">
pre(:class="{ 'zi-bash': bash }" v-if="isBlock")
  code
    slot
code(v-else)
  slot
</template>

<script>
export default {
  name: 'zi-code',

  props: {
    bash: Boolean,
    block: Boolean,
    inline: Boolean,
  },

  computed: {
    isBlock() {
      if (this.inline) return false
      return this.bash || this.block
    },
  },
}
</script>

<style lang="stylus" src="./code.styl"></style>
