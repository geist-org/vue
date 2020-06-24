<template lang="pug">
div
  zi-snippet(text="yarn add @zeit-ui/vue" type="dark" width="300px")
  zi-spacer
  zi-snippet(text="yarn add @zeit-ui/vue" type="success" width="300px")
  zi-spacer
  zi-snippet(text="yarn add @zeit-ui/vue" type="warning" width="300px")
  zi-spacer
  zi-snippet(text="yarn add @zeit-ui/vue" type="error" width="300px")
  zi-spacer
  zi-snippet(text="yarn add @zeit-ui/vue" type="secondary" width="300px")
  zi-spacer
  zi-snippet(text="yarn add @zeit-ui/vue" type="lite" width="300px")
</template>

<script>
export default {
  name: 'ex-snippet-type',
}
</script>
