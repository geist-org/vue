<template lang="pug">
div
  zi-button(size="small" auto @click="visible = true") more element
  zi-dialog(v-model="visible" title="Contact us" done="ok!")
    p input your phone number:
    p
      zi-input(value="001" size="small")
    br
    p select region
    p
      zi-radio(v-model="region" label="usa") USA
      zi-radio(v-model="region" label="cn") CN
</template>

<script>
export default {
  name: 'ex-dialog-more',

  data: () => ({
    visible: false,
    region: 'cn',
  }),
}
</script>
