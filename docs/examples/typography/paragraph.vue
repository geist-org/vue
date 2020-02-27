<template lang="pug">
div
  p {{ text }}

  p
    b {{ text }}

  p(style="font-size: .875em;") {{ text }}
</template>

<script>
export default {
  name: 'ex-typography-paragraph',

  data: () => ({
    text: 'Our mission is to make cloud computing accessible to everyone. ' +
      'We build products for developers and designers. And those who aspire to become one.',
  }),
}
</script>
