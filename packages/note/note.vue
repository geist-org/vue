<template lang="pug">
.zi-note(:class="classes")
   span.zi-note-type(v-if="label || classes") {{ `${label || classes}:&nbsp` }}
   slot
</template>

<script>
export default {
  name: 'zi-note',

  props: {
    label: {
      type: String,
    },
    hint: {
      type: Boolean,
    },
    alert: {
      type: Boolean,
    },
    error: {
      type: Boolean,
    },
  },

  computed: {
    classes() {
      let str = ''
      this.hint && (str += 'hint')
      this.error && (str += 'error')
      this.alert && (str += 'alert')
      return str
    },
  },
}
</script>
