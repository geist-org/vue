<template lang="pug">
div
  zi-grid(container :spacing="3" justify="center")
    zi-grid(item xs)
      zi-card(shadow)
    zi-grid(item xs)
      zi-card(shadow)
    zi-grid(item xs)
      zi-card(shadow)
  zi-grid(container :spacing="3" justify="center")
    zi-grid(item xs)
      zi-card(shadow)
    zi-grid(item :xs="12")
      zi-card(shadow)
    zi-grid(item xs)
       zi-card(shadow)
</template>

<script>
export default {
  name: 'ex-grid-auto-width',
}
</script>
