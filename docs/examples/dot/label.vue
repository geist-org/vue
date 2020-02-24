<template lang="pug">
div
  zi-dot canceled
  br
  br
  zi-dot(type="success") ready
  br
  br
  zi-dot(type="danger") error
  br
  br
  zi-dot(type="warning" label="warning")
</template>

<script>
export default {
  name: 'ex-dot-label',
}
</script>
