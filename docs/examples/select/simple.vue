<template lang="pug">
div
  zi-select(simple value="First option" style="margin-bottom: 10px;")
    zi-option(value="First option")
    zi-option(value="Second option")
  br
  zi-select(simple size="small" value="First option" style="margin-bottom: 10px;")
    zi-option(value="First option")
    zi-option(value="Second option")
  br
  zi-select(simple size="mini" value="First option")
    zi-option(value="First option")
    zi-option(value="Second option")
</template>

<script>
export default {
  name: 'ex-select-simple',
}
</script>
