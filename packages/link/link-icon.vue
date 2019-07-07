<template>
  <svg width="13px" height="13px" viewBox="0 0 13 13" aria-label="external link">
    <g :stroke="currentColor" stroke-width="0.8" fill="none" fill-rule="evenodd">
      <path d="M6.2 6.7l5-5.3M7.9.9h4m0 0v4m-2 2.5v2.5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5c0-1.1.9-2 2-2h2.5"></path>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'zi-link-icon',

  props: {
    color: Boolean,
  },

  computed: {
    currentColor() {
      return this.color ? 'var(--geist-success)' : 'var(--geist-foreground)'
    },
  },
}
</script>

