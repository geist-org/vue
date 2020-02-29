<template lang="pug">
div(:class="$style.tags")
  zi-tag(type="danger") Status: Danger
  br
  zi-tag(type="success") Status: Success
  br
  zi-tag(warning) Status: Warning
</template>

<script>
export default {
  name: 'ex-tag-type',
}
</script>

<style module lang="stylus">
  .tags span
    margin-bottom: 10px
</style>
