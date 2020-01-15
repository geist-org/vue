<template lang="pug">
zi-textarea(v-model="value" :placeholder="placeholder" :rows="rows")
</template>

<script>
export default {
  name: 'ex-textarea-basic',

  data: () => ({
    rows: 4,
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }),

  methods: {

    add() {
      this.rows = 6
    },

  },
}
</script>
