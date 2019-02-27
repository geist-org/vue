<template lang="pug">
zi-table(:data="[{test: 1, name: 'zi-table'}, {test: 2, name: 'zi-table2'}]")
  zi-table-column(label="test" prop="name")
  zi-table-column(label="表格" #default="row")
    zi-tag {{ row.test }}
</template>

<script>
export default {
  name: 'ex-table-basic',
}
</script>
