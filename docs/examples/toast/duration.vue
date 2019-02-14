<template lang="pug">
zi-button(
  size="small"
  @click="$Toast.show({ text: 'hide after 2000ms', duration: 2000 })"
) set duration
</template>
<script>
export default {
  name: 'ex-toast-duration',
}
</script>
