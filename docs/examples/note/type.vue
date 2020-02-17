<template lang="pug">
div
  zi-note(type="success") This is a success note.
  br
  zi-note(type="error") This is an error note.
  br
  zi-note(type="warning") This is an warning note.
  br
  zi-note(type="secondary") This is a secondary note.
  br
  zi-note(label="tip" type="danger") This is an error note with label.
    br
    a A link to helpful information.
</template>

<script>
export default {
  name: 'ex-note-type',
}
</script>
