<template lang="pug">
div
  zi-popover(align="left" style="margin-right: 50px")
    zi-button(size="small") lint
    template(v-slot:dropdown)
      zi-popover-item(title) Dashboard
      zi-popover-item(line)
      zi-popover-item Team A
      zi-popover-item Team B

  zi-popover(align="right")
    zi-button(size="small") subtitle
    template(v-slot:dropdown)
      zi-popover-item(title) Dashboard
      zi-popover-item(line)
      zi-popover-item Team A
      zi-popover-item Team B
      zi-popover-item(line)
      zi-popover-item(subtitle) Asian Team
      zi-popover-item Team C
      zi-popover-item Team D
</template>

<script>
export default {
  name: 'ex-popover-split',
}
</script>
