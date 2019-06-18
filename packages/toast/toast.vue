<template lang="pug">
.zi-toast-container
  .zi-toast(:class="type && type")
    span.message {{ text }}
    zi-button(
      v-if="action"
      auto ghost
      size="mini"
      :type="type || 'normal'"
      @click="handler && handler()"
    ) {{ action }}
</template>

<script>
export default {
  name: 'zi-toast-template',

  data: () => ({
    text: '',
    action: '',
    type: '',
    handler: () => ({}),
  }),

  methods: {
    init(options) {
      if (typeof options !== 'object') return (this.text = options)
      const {
        text, action, handler, type,
      } = options
      this.text = text
      this.action = action
      this.handler = handler
      this.type = type
    },
  },
}
</script>

<style lang="stylus" src="./toast.styl"/>
