<template lang="pug">
zi-table(
  :data="tableData"
  @cell-click="getCell"
  @row-click="getRow"
  hover)
  zi-table-column(prop="name" label="fruit")
  zi-table-column(prop="usage" label="usage")
  zi-table-column(prop="point" label="point")
  zi-table-column(prop="taste" label="taste")
</template>

<script>
export default {
  name: 'ex-table-basic',

  data: () => ({
    tableData: [
      {
        name: 'apple',
        usage: 'eat',
        point: 'red, I like it',
        taste: 'sweet',
      },
      {
        name: 'orange',
        usage: 'eat',
        point: 'orange, fire ',
        taste: 'sour',
      },
      {
        name: 'lemon',
        usage: 'picture',
        point: 'sour',
        taste: 'sour',
      },
      {
        name: 'pear',
        usage: 'eat',
        point: 'yellow, code',
        taste: 'sweet',
      },
    ],
  }),

  methods: {
    getCell(cell, row, event) {
      console.log(cell, row, event, 'cell')
    },

    getRow(row, event) {
      console.log(row, event, 'row')
    },
  },
}
</script>
