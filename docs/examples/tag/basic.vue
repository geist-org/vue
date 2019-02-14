<template lang="pug">
div
  zi-tag Status: Unstable
  br
  zi-tag(type="success") Status: Unstable
  br
  zi-tag(warning) Status: Unstable

</template>
<script>
export default {
  name: 'ex-tag-basic',
}
</script>
<style>
span {
  margin-bottom: 10px;
}
</style>
