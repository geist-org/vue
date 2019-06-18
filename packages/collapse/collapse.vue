<template lang="pug">
.zi-collapse-group
  slot
</template>

<script>
import { print } from '../utils'

export default {
  name: 'zi-collapse',

  data: () => ({
    privateModel: '',
    privateModelArr: [],
  }),

  props: {
    value: [Array, String, Number],
    accordion: Boolean,
  },

  computed: {
    model: {
      get() {
        return this.value !== undefined ? this.value : this.modelAlias
      },

      set(val) {
        this.modelAlias = val
        this.$emit('input', val)
      },
    },
  },

  mounted() {
    this.modelAlias = this.accordion ? this.privateModel : this.privateModelArr
    if (this.value === undefined) return

    const isArray = Array.isArray(this.value)
    if (this.accordion && isArray) {
      return print.error('[value/v-model] cannot be an Array in [accordion] mode.')
    }
    if (!this.accordion && !isArray) {
      return print.error('[value/v-model] must be an Array.')
    }
  },

  methods: {
    setValue(name, status) {
      if (!Array.isArray(this.modelAlias)) {
        this.model = status ? name : null
        return
      }
      this.model = status ? [...new Set(this.modelAlias.concat([name]))] : this.modelAlias.filter(r => r !== name)
    },
  },
}
</script>

<style lang="stylus" src="./collapse.styl"/>
