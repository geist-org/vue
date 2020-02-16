<template lang="pug">
div
  zi-textarea(value="This is a danger textarea" :type="danger")
  br
  zi-textarea(value="This is a success textarea" :type="success")
  br
  zi-textarea(value="This is a warning textarea" :type="warning")
</template>

<script>
export default {
  name: 'ex-textarea-type',

  data: () => ({
    danger: 'danger',
    success: 'success',
    warning: 'warning',
  }),
}
</script>
