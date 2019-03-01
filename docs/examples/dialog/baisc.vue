<template lang="pug">
div
  zi-button(size="small" @click="visible = true") show
  zi-dialog(v-model="visible")
    p Mark all tasks as completed ?
</template>

<script>
export default {
  name: 'ex-dialog-basic',

  data: () => ({
    visible: false,
  }),
}
</script>
