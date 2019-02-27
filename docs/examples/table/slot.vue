<template lang="pug">
zi-table(:data="list")
  zi-table-column(label="number" prop="number" width="20%")
  zi-table-column
    template(#header)
      zi-tag name
    template(#default="{ name }")
      zi-tag {{ name }}
</template>

<script>
export default {
  name: 'ex-table-slot',

  data: () => ({
    list: [
      {number: 1, name: 'zi-table'},
      {number: 2, name: 'zi-table-2'},
    ],
  }),
}
</script>
