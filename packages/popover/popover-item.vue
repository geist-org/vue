<template lang="pug">
.popover-item(:class="{ primary, nohover, line, disabled }" @click.stop="clickHandler")
  span.text(v-if="!nohover")
    slot
  span.title(v-if="!line && title")
    slot
  span.subtitle(v-if="!line && subtitle")
    slot
</template>

<script>
export default {
  name: 'zi-popover-item',

  props: {
    line: Boolean,
    title: Boolean,
    subtitle: Boolean,
    primary: Boolean,
    disabled: Boolean,
    href: String,
    to: String,
    command: [String, Number, Object],
  },

  mounted() {
    if (!this.inGroup) {
      return print.type(`${this.$options.name} \
      required parent component: [zi-popover]`)
    }
  },

  computed: {
    nohover() {
      return this.line || this.title || this.subtitle
    },

    inGroup() {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'zi-popover') {
          this._group = parent
          return true
        }
        parent = parent.$parent
      }
      return false
    },
  },

  methods: {
    clickHandler() {
      if (this.disabled) return
      if (this.href) {
        window.location.href = this.href
      }
      if (this.to && this.$router) {
        this.$router.push(this.to)
      }
      this._group && this._group.childTrigger(this.command)
    },
  },
}
</script>

<style scoped lang="stylus" src="./popover.styl">
</style>
