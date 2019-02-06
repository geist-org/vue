<template lang="pug">
div
  zi-badge(count="5" style="margin-right: 5px;")
  zi-badge(count="100" style="margin-right: 5px;")
  zi-badge(count="100" style="margin-right: 5px; background: red;")
  zi-badge(count="100" style="background: green;")
</template>

<script>
export default {
  name: 'ex-badge-default',
}
</script>
