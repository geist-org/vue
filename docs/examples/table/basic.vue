<template lang="pug">
zi-table(:data="tableData")
  zi-table-column(prop="name" label="姓名" min-width="100")
  zi-table-column(prop="age" label="年龄" width="100")
  zi-table-column(prop="usage" label="作用" min-width="250")
  zi-table-column(label="操作")
    template(slot-scope="scope")
      a(@click="getData(scope.row, scope.$index)") look
</template>

<script>
export default {
  name: 'ex-table-basic',

  data: () => ({
    tableData: [
      { name: '吴克', usage: 'five', age: 10 },
      { name: '吴克1', age: 11, usage: 'five' },
      { name: '吴克2', age: 101, usage: 'five' },
      { name: '吴克3', age: 102, usage: 'fivefivefivefivefivefivefivefivefive' }],
  }),

  methods: {
    getData(row, index) {
      console.log(row, index)
    },
  },
}
</script>
