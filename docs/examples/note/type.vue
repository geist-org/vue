<template lang="pug">
div
  zi-note(type="hint") a hint note
  br
  zi-note(type="error") an error note
  br
  zi-note(type="alert") an alert note
  br
  zi-note(label="note" type="error") a basic note
    br
    a A link to helpful information.
</template>

<script>
export default {
  name: 'ex-note-type',
}
</script>
