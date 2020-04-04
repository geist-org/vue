<template lang="pug">
zi-collapse(v-model="value" accordion)
  zi-collapse-item(title="Quantum Mechanics" shadow)
    p Quantum mechanics is the theory of describing micro
      |matter, and together with relativity, it is regarded
      |as the two basic pillars of modern physics.
</template>

<script>
export default {
  name: 'ex-collapse-shadow',

  data: () => ({
    value: '',
  }),
}
</script>
