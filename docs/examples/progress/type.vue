<template lang="pug">
div(:class="$style.progress")
  zi-progress(value="20" type="success")
  zi-progress(value="40" type="warning")
  zi-progress(value="60" type="danger")
  zi-progress(value="80" type="secondary")
</template>

<script>
export default {
  name: 'ex-progress-type',
}
</script>

<style module lang="stylus">
  .progress div
    margin-bottom 10px
</style>
