<template lang="pug">
zi-tabs(disabled)
  zi-tabs-item(label="Gitlab" value="gitlab")
    zi-note gitlab content
  zi-tabs-item(label="Github" value="github" active)
    zi-note github content
  zi-tabs-item(label="Mongo" value="mongo")
    zi-note mongo content
</template>

<script>
export default {
  name: 'ex-tabs-disabled',
}
</script>
