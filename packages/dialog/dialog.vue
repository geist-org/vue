<template lang="pug">
transition(name="zi-dialog-backdrop")
  .zi-dialog-root(v-show="!!model")
    .zi-dialog-backdrop
    .zi-dialog-backdrop.responsive(@click.self="close" v-if="closeByModal")
    transition(name="zi-dialog-slide")
      .zi-dialog-wrapper(v-if="!!model" :style="{ width, minWidth: width || '' }")
        .zi-dialog-content
          h2.header(v-if="title") {{ title }}
          .body #[slot]
        .zi-dialog-footer
          button.action(@click.stop="confirm(false)") {{ cancel }}
          button.action(@click.stop="confirm(true)") {{ done }}
</template>

<script>
import { bodyScroll } from '../utils'

export default {
  name: 'zi-dialog',

  data: () => ({
    privateModel: false,
  }),

  props: {
    title: String,
    value: Boolean,
    width: String,
    cancel: {
      type: String,
      default: 'cancel',
    },
    done: {
      type: String,
      default: 'done',
    },
    beforeDone: {
      type: Function,
      default: done => done(),
    },
    closeByModal: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    model: {
      get() {
        return this.value === undefined ? this.privateModel : this.value
      },

      set(val) {
        this.privateModel = val
        this.$emit('input', val)
      },
    },
  },

  watch: {
    value(next) {
      this.privateModel = next
      bodyScroll.lockScroll(this.privateModel)
    },
  },

  methods: {
    confirm(result) {
      if (result) {
        return this.beforeDone(() => {
          this.model = false
          this.$emit('done')
        })
      }
      this.model = false
      this.$emit('cancel')
    },

    close() {
      if (!this.closeByModal) return
      this.confirm(false)
    },
  },

  mounted() {
    if (this.value) bodyScroll.lockScroll(this.value)
  },
}
</script>

<style lang="stylus" scoped src="./dialog.styl"></style>
