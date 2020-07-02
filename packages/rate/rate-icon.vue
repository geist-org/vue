<template>
  <svg
    v-on="listeners"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
    shape-rendering="geometricPrecision"
    style=""
  >
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    />
  </svg>
</template>

<script>
export default {
  name: 'zi-rate-icon',

  props: {
    isActive: Boolean,
  },

  computed: {
    listeners() {
      return this.$listeners
    },
  },
}
</script>
