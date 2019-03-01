<template lang="pug">
div
  zi-table(:data="list")
    zi-table-column(label="number")
    zi-table-column(label="name")
    template(slot="empty")
      zi-tag empty
  br
  br
  zi-table(:data="list" empty-text="empty-text")
    zi-table-column(label="number")
    zi-table-column(label="name")
</template>

<script>
  export default {
    name: 'ex-table-empty',

    data: () => ({
      list: [],
    }),
  }
</script>
