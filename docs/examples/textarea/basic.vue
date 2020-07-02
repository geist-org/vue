<template lang="pug">
zi-textarea(:placeholder="placeholder")
</template>

<script>
export default {
  name: 'ex-textarea-basic',

  data: () => ({
    placeholder:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
  }),
}
</script>
