<template lang="pug">
div(class="name")
  zi-radio(v-model="value" label="1" disabled style="margin-right: 20px") Sydney
  zi-radio(v-model="value" label="2" disabled) London
</template>

<script>
export default {
  name: 'ex-radio-disabled',

  data: () => ({
    value: '1',
    checked: '3',
    data: [{ label: '3', name: 'BaiJing' }, { label: '4', name: 'DongBai' }, { label: '5', name: 'HeLan' }],
  }),
}
</script>
