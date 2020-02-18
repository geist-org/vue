<template>
  <svg viewBox="0 0 24 24" width="1em" height="1em" :stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
       stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" :style="{ color: currentColor }">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <path d="M15 3h6v6"/>
    <path d="M10 14L21 3"/>
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

