<template lang="pug">
div
  h1 {{ text }}
  h2 {{ text }}
  h3 {{ text }}
  h4 {{ text }}
  h5 {{ text }}
  h6 {{ text }}
</template>

<script>
export default {
  name: 'ex-typography-headings',

  data: () => ({
    text: 'The evil rabbit jumps over the fence.',
  }),
}
</script>
