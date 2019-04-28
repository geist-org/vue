<template lang="pug">
div
  zi-table(:data="tableData" width="649px")
    zi-table-column(prop="id")
    zi-table-column(prop="name" label="fruit" width="150")
    zi-table-column(prop="time" label="date" width="200")
    zi-table-column(prop="point" label="point" width="350")
    zi-table-column(prop="usage" label="usage" width="150")
  zi-card(pin style="margin-top: 10px") This is a scrollable table
</template>

<script>
export default {
  name: 'ex-table-width',

  data: () => ({
    tableData: [{
      id: 1,
      name: 'table',
      time: '2019-03-09',
      point: 'this is a scrollable table',
      usage: 'write',
    }, {
      id: 2,
      name: 'table',
      time: '2019-03-10',
      point: 'this is a scrollable table',
      usage: 'read' ,
    }, {
      id: 3,
      name: 'table',
      time: '2019-05-03',
      point: 'this is a scrollable table',
      usage: 'work',
    }, {
      id: 4,
      name: 'table',
      time: '2019-05-04',
      point: 'this is a scrollable table',
      usage: 'option' ,
    }],
  }),
}
</script>
