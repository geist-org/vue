<template lang="pug">
div.zi-checkbox-group
  slot
</template>

<script>
export default {
  name: 'zi-checkbox-group',

  data: () => ({
    _model: [],
  }),

  props: {
    value: {
      type: Array,
      default: () => [],
    },
    disabled: Boolean,
  },

  computed: {
    model: {
      get() {
        if (this.value !== undefined) return this.value
        return this._model
      },

      set(val) {
        this._model = val
        this.$emit('input', val)
      },
    },
  },

  methods: {
    setLabelStatus(label, nextStatus) {
      if (!nextStatus) {
        this.model = this.model.filter(item => item !== label)
        return
      }
      this.model = [...new Set(this.model.concat([label]))]
    },
  },
}
</script>
