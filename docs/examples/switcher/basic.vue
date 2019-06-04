<template lang="pug">
div
  zi-switcher(@label-selected="selectHandler")
    zi-switcher-item(label="Gitlab" active)
      zi-note Gitlab content
    zi-switcher-item(label="Github")
      zi-note Github content
</template>
<script>
export default {
  name: 'ex-switcher-basic',

  methods: {
    selectHandler(label) {
      console.log(label)
    },
  },
}
</script>
