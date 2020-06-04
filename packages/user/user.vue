<template lang="pug">
.zi-user(v-on="$listeners")
  zi-avatar.zi-user-avatar(:src="src" :text="text" v-bind="$attrs")
  .zi-user-content
    span.zi-user-name {{ name }}
    span.zi-user-description
      slot
</template>

<script>
export default {
  name: 'zi-user',

  props: {
    src: String,

    name: String,

    text: String,
  },
}
</script>

<style lang="stylus" src="./user.styl"/>
