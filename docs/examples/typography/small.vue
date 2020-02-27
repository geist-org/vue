<template lang="pug">
div
  small {{ text }}

  small
    b {{ text }}

</template>

<script>
export default {
  name: 'ex-typography-small',

  data: () => ({
    text: 'Our mission is to make cloud computing accessible to everyone. '
      + 'We build products for developers and designers. And those who aspire to become one.',
  }),
}
</script>
