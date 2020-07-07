<template lang="pug">
zi-grid(container justify="center" :spacing="3")
  zi-grid(:xs="12" :sm="0")
    zi-card.card(shadow)
  zi-grid(:xs="12" :sm="0")
    zi-card.card(shadow)
  zi-grid(:xs="24")
    zi-card.card(shadow)
  zi-grid(:xs="24")
    zi-card.card(shadow)
</template>

<script>
export default {
  name: 'ex-grid-hidden',
}
</script>
