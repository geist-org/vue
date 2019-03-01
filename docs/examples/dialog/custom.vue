<template lang="pug">
div
  zi-button(size="small" auto @click="visible = true") show custom
  zi-dialog(v-model="visible" title="Task Confim" done="ok!")
    p Mark all tasks as completed ?
</template>

<script>
export default {
  name: 'ex-dialog-custom',

  data: () => ({
    visible: false,
  }),
}
</script>
