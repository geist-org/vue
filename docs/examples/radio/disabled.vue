<template lang="pug">
div(class="name")
  zi-radio(v-model="value" label="1" disabled) Sydney
  zi-radio(v-model="value" label="2") London
  br
  zi-radio-group(v-model="checked" disabled)
    zi-radio(v-for="item in data" :label="item.label" :key="item.value") {{ item.name }}
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
