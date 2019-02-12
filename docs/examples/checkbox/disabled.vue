<template lang="pug">
div
  zi-checkbox(v-model="value" disabled style="margin-right: 20px;") Sydney
  zi-checkbox(v-model="value2" disabled) BeiJing
</template>

<script>
export default {
  name: 'ex-checkbox-disabled',

  data: () => ({
    value: false,
    value2: true,
  }),
}
</script>
