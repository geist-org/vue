<template lang="pug">
div
  zi-select(value="First option" disabled style="margin-bottom: 10px;")
    zi-option(value="First option")
    zi-option(value="Second option")
  br
  zi-select(value="Second option")
    zi-option(value="First option" disabled)
    zi-option(value="Second option")
</template>

<script>
export default {
  name: 'ex-select-disabled',
}
</script>
