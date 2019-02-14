<template lang="pug">
zi-button(size="small"
  @click="$Toast.show('The Evil Rabbit jumped over the fence')"
) show toast
</template>
<script>
export default {
  name: 'ex-toast-basic',
}
</script>
