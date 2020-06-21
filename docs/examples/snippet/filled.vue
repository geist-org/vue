<template lang="pug">
div
  zi-snippet(text="yarn add @zeit-ui/react" type="success" filled width="300px")
  zi-spacer
  zi-snippet(text="yarn add @zeit-ui/react" type="warning" filled width="300px")
  zi-spacer
  zi-snippet(text="yarn add @zeit-ui/react" type="error" filled width="300px")
  zi-spacer
  zi-snippet(text="yarn add @zeit-ui/react" type="secondary" filled width="300px")
</template>

<script>
export default {
  name: 'ex-snippet-filled',
}
</script>
