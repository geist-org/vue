<template lang="pug">
zi-fieldset(disabled)
  h1 The Evil Rabbit Jumped over the Fence
  p The Evil Rabbit Jumped over the Fence
  template(v-slot:footer)
    p The Evil Rabbit Jumped over the Fence
    zi-button(size="mini" type="primary" auto disabled) action
</template>

<script>
export default {
  name: 'ex-fieldset-disabled',
}
</script>
