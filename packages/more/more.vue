<template lang="pug">
.zi-more
  zi-button.zi-more-slot(
    circular size="small"
    :loading="loading"
    @click="toggleHandler"
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

<style lang="stylus" src="./more.styl" />
