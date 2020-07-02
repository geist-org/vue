<template>
  <svg v-on="listeners" width="11px" height="11px" viewBox="0 0 11 11">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <rect x="0" y="0" width="11" height="11" rx="1.5"></rect>
      <rect
        stroke="var(--geist-foreground)"
        stroke-width="0.8"
        x="1"
        y="1"
        width="9"
        height="9"
        rx="1.5"
      ></rect>
      <path
        :d="!isExpand ? 'M3.5 5.5h4m-2-2v4' : 'M3.5 5.5h4'"
        stroke="var(--geist-foreground)"
        stroke-width="0.8"
      ></path>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'zi-files-status',

  props: {
    isExpand: Boolean,
  },

  computed: {
    listeners() {
      return { ...this.$listeners }
    },
  },
}
</script>
