<template lang="pug">
zi-button(:icon="icon") disc
</template>

<script>
const customIcon = {
  render() {
    return (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
        shape-rendering="geometricPrecision"
        style="color: var(--geist-foreground);">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    )
  },
}

export default {
  name: 'ex-button-custom-icon',

  components: { customIcon },

  data: () => ({
    icon: customIcon,
  }),
}
</script>
