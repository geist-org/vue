<template lang="pug">
div
  zi-note(type="success" filled) This is a filled note.
  br
  zi-note(type="error" filled) This is a filled note.
  br
  zi-note(type="secondary" filled) This is a filled note.
  br
  zi-note(type="warning" filled) This is a filled note.
  br
  zi-note(filled) This is a filled note.
  br
  zi-note(label="" filled) This is a filled note without label.
</template>

<script>
export default {
  name: 'ex-note-filled',
}
</script>
