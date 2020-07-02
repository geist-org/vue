<template lang="pug">
.zi-user(v-on="$listeners" v-bind="$attrs")
  Avatar.zi-user-avatar(:src="src" :text="text" :alt="altText")
  .zi-user-content
    span.zi-user-name {{ name }}
    span.zi-user-description
      slot
</template>

<script>
import Avatar from '../avatar'

export default {
  name: 'zi-user',

  components: { Avatar },

  props: {
    src: String,

    name: String,

    text: String,

    altText: String,
  },
}
</script>

<style lang="stylus" src="./user.styl" />
