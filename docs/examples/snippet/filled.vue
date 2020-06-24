<template lang="pug">
div
  zi-snippet(text="yarn add @zeit-ui/vue" type="success" filled width="300px")
  zi-spacer
  zi-snippet(text="yarn add @zeit-ui/vue" type="warning" filled width="300px")
  zi-spacer
  zi-snippet(text="yarn add @zeit-ui/vue" type="error" filled width="300px")
  zi-spacer
  zi-snippet(text="yarn add @zeit-ui/vue" type="secondary" filled width="300px")
</template>

<script>
export default {
  name: 'ex-snippet-filled',
}
</script>
