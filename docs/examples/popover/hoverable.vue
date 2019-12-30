<template lang="pug">
zi-popover(:hoverable="true")
  zi-button(size="small") hover
  template(v-slot:dropdown)
    zi-popover-item(title) Dashboard
    zi-popover-item Team A
    zi-popover-item Team B
</template>

<script>
export default {
  name: 'ex-popover-hoverable',
}
</script>
