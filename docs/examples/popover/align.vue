<template lang="pug">
div
  zi-popover(align="left" style="margin-right: 50px")
    zi-button(size="small") align left
    template(v-slot:dropdown)
      zi-popover-item(title) Dashboard
      zi-popover-item Team A
      zi-popover-item Team B

  zi-popover(align="right")
    zi-button(size="small") align right
    template(v-slot:dropdown)
      zi-popover-item(title) Dashboard
      zi-popover-item Team A
      zi-popover-item Team B
</template>

<script>
export default {
  name: 'ex-popover-align',
}
</script>
