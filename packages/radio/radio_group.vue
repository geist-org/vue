<template lang="pug">
div.zi-radio-group
  slot
</template>

<script>
export default {
  name: 'zi-radio-group',

  props: {
    value: [String, Number],
    disabled: Boolean,
  },

  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },

  methods: {
    setLabelStatus(status) {
      this.model = status
    },
  },
}
</script>
