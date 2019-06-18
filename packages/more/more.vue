<template lang="pug">
.zi-more(@click="toggleHandler")
  zi-button(
    circular size="small"
    :icon="`suffix zi-icon-${toggle ? 'down' : 'up'}`"
    :loading="loading"
  ) {{ statusText }}
</template>

<script>
export default {
  name: 'zi-more',

  data: () => ({
    toggle: undefined,
  }),

  props: {
    text: {
      type: [String, Number],
      default: 'show more',
    },
    textUp: {
      type: [String, Number],
    },
    expand: Boolean,
    loading: Boolean,
  },

  computed: {
    statusText() {
      const up = this.textUp || this.text
      return this.toggle ? up : this.text
    },
  },

  mounted() {
    this.toggle = this.expand
  },

  methods: {
    toggleHandler() {
      this.toggle = !this.toggle
    },
  },
}
</script>

<style lang="stylus" src="./more.styl"/>
