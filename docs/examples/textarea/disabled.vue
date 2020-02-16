<template lang="pug">
zi-textarea(:placeholder="placeholder" disabled)
</template>

<script>
export default {
  name: 'ex-textarea-disabled',

  data: () => ({
    placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }),
}
</script>
