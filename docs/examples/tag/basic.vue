<template lang="pug">
div(:class="$style.tags")
  zi-tag Status: Unstable
  br
  zi-tag(type="success") Status: Success
  br
  zi-tag(warning) Status: Warning

</template>
<script>
export default {
  name: 'ex-tag-basic',
}
</script>
<style module lang="stylus">
.tags span
    margin-bottom: 10px
</style>
