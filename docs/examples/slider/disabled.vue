<template lang="pug">
 zi-slider(style="width: 60%" v-model="value" disabled)
</template>

<script>
export default {
  name: 'ex-slider-disabled',

  data: () => ({
    value: 14,
  }),
}
</script>
