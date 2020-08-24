<template lang="pug">
div
  ul
    li Static websites and static generators (React, Vue, Angular, etc)
    li Code that renders HTML on the server-side
    li API endpoints that query databases or web APIs and return dynamic data

  ol
    li Push a commit to trigger the deployment.
    li You'll see the deployment status on GitHub.

</template>

<script>
export default {
  name: 'ex-typography-list',

  data: () => ({
    text:
      'Our mission is to make cloud computing accessible to everyone. ' +
      'We build products for developers and designers. And those who aspire to become one.',
  }),
}
</script>
