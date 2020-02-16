<template lang="pug">
zi-textarea(v-model="value" error)
</template>

<script>
export default {
  name: 'ex-textarea-error',

  data: () => ({
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }),
}
</script>
