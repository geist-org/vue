<template lang="pug">
pre(:class="{ 'zi-bash': bash, 'zi-pre': bash || block }" v-if="isBlock")
  code
    slot
code(v-else)
  slot
</template>

<script>
import { print } from '../utils'

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
      if (this.bash) print.warning('[bash]: [bash] will be removed in the next version, use component [snippet] instead.')
      return this.bash || this.block
    },
  },
}
</script>

<style lang="stylus" src="./code.styl"></style>
