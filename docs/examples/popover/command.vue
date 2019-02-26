<template lang="pug">
zi-popover(@command="commandHandler")
  zi-button(size="small") command
  template(v-slot:dropdown)
    zi-popover-item(title) Dashboard
    zi-popover-item(command="a") Team A
    zi-popover-item(command="b") Team B
</template>

<script>
export default {
  name: 'ex-popover-command',

  methods: {
    commandHandler(command) {
      console.log(command)
    },
  },
}
</script>
