<template lang="pug">
zi-table(:data="tableData" empty-text="table is empty" width="649px")
  zi-table-column(prop="name" label="fruit")
  zi-table-column(prop="usage" label="usage")
  zi-table-column(prop="area" label="area" min-width="250")
  zi-table-column(label="operate")
    template(slot-scope="scope")
      a(@click="deleteRow(scope.row, scope.$index)") delete
</template>

<script>
export default {
  name: 'ex-table-delete',

  data: () => ({
    tableData: [
      {
        name: 'apple',
        usage: 'eat',
        area: ' the northern part of the country',
      },
      {
        name: 'orange',
        usage: 'eat',
        area: ' the southern part of the country',
      },
      {
        name: 'lemon',
        usage: 'picture',
        area: ' the southern part of the country',
      },
      {
        name: 'pear',
        usage: 'eat',
        area: ' the northern part of the country',
      },
    ],
  }),

  methods: {
    deleteRow(row, index) {
      this.tableData.splice(index, 1)
    },
  },
}
</script>
