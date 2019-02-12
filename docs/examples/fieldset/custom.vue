<template lang="pug">
zi-fieldset
  h1 The Evil Rabbit Jumped over the Fence
  p The Evil Rabbit Jumped over the Fence
  template(slot="footer")
    p The Evil Rabbit Jumped over the Fence
    zi-button(size="mini" type="primary" auto) action
</template>

<script>
export default {
  name: 'ex-fieldset-custom',
}
</script>
