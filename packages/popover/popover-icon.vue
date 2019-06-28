<template>
  <svg width="24" height="12" viewBox="0 0 24 12">
    <path :fill="isDark ? '#000' : '#fff'" stroke-width="1px" :stroke="isDark ? '#333' : '#fff'" fill-rule="evenodd"
      d="M20 12l-8-8-12 12"></path>
  </svg>
</template>

<script>
export default {
  name: 'zi-popover-icon',

  props: {
    isDark: Boolean,
  },
}
</script>
