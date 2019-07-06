<template lang="pug">
div
  zi-note(type="success" fill) This is a filled note.
  br
  zi-note(type="error" fill) This is a filled note.
  br
  zi-note(type="secondary" fill) This is a filled note.
  br
  zi-note(type="warning" fill) This is a filled note.
  br
  zi-note(fill) This is a filled note.
  br
  zi-note(label="" fill) This is a filled note without label.
</template>

<script>
export default {
  name: 'ex-note-filled',
}
</script>
