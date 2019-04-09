<template lang="pug">
zi-table(:data="tableData" width="700px")
  zi-table-column(prop="id" width="180")
  zi-table-column(prop="name" label="fruit" width="180")
  zi-table-column(prop="usage" label="usage" width="200")
  zi-table-column(prop="point" label="point" width="250")
  zi-table-column(prop="taste" label="taste" width="250")
</template>

<script>
export default {
  name: 'ex-table-width',

  data: () => ({
    tableData: [
      { id: 1, name: 'apple', usage: 'eat', point: 'red, I like it', taste: 'sweet'},
      { id: 2, name: 'orange', usage: 'eat', point: 'orange, easy get inflamed ', taste: 'sour' },
      { id: 3, name: 'lemon', usage: 'picture', point: 'sour', taste: 'sour' },
      { id: 4, name: 'pear', usage: 'eat', point: 'yellow, code', taste: 'sweet' }],
  }),
}
</script>
