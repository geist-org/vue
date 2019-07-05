<template lang="pug">
div(class="name")
  zi-radio(v-model="value" label="1" disabled) Sydney
  zi-radio(v-model="value" label="2" disabled) London
</template>

<script>
export default {
  name: 'ex-radio-disabled',

  data: () => ({
    value: '1',
  }),
}
</script>
