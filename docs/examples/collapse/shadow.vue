<template lang="pug">
zi-collapse(v-model="value" accordion)
  zi-collapse-item(title="Quantum Mechanics" shadow)
    p Quantum mechanics is the theory of describing micro
      |matter, and together with relativity, it is regarded
      |as the two basic pillars of modern physics.
  zi-collapse-item(title="Classical Mechanics" shadow)
    p The general term of mechanics before the emergence
      |of quantum mechanics. It studies the laws of motion
      |of macro objects, including classical theory and
      |special relativity based on Newton's laws of motion.
</template>

<script>
export default {
  name: 'ex-collapse-shadow',

  data: () => ({
    value: '',
  }),
}
</script>
