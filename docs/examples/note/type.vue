<template lang="pug">
div
  zi-note(hint)
    span a hint note
  br
  zi-note(error)
    span an error note
  br
  zi-note(alert)
    span an alert note
</template>

<script>
export default {
  name: 'ex-note-type',
}
</script>
