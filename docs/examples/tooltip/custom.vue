<template lang="pug">
zi-tooltip
  span Paragraph
  template(v-slot:content)
    p The #[b Evil Rabbit] Jumped over the #[i Fence].
</template>

<script>
export default {
  name: 'ex-tooltip-custom',
}
</script>
