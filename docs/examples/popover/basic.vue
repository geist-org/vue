<template lang="pug">
zi-popover
  zi-button(size="small") show team
  template(v-slot:dropdown)
    zi-popover-item(title) Dashboard
    zi-popover-item Team A
    zi-popover-item Team B
</template>

<script>
export default {
  name: 'ex-popover-basic',
}
</script>
