<template lang="pug">
div
  zi-input(placeholder="placeholder" prefix-label="https://" style="margin-bottom: 10px;")
  br
  zi-input(placeholder="placeholder" prefix-icon="zi-icon-github" style="margin-bottom: 10px;")
  br
  zi-input(placeholder="placeholder" suffix-label=".com" style="margin-bottom: 10px;")
  br
  zi-input(placeholder="placeholder" prefix-label="https://" suffix-label=".com")
</template>

<script>
export default {
  name: 'ex-input-label',
}
</script>
