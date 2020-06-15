<template lang="pug">
zi-grid(container :spacing="3" justify="center")
  zi-grid(:xs="24")
    zi-card(shadow)
  zi-grid(:xs="12")
    zi-card(shadow)
  zi-grid(:xs="12")
    zi-card(shadow)
  zi-grid(:xs="6")
    zi-card(shadow)
  zi-grid(:xs="6")
    zi-card(shadow)
  zi-grid(:xs="6")
    zi-card(shadow)
  zi-grid(:xs="6")
    zi-card(shadow)
  zi-grid(:xs="6")
    zi-card(shadow)
  zi-grid(:xs="12")
    zi-card(shadow)
  zi-grid(:xs="6")
    zi-card(shadow)
</template>

<script>
export default {
  name: 'ex-grid-fluid',
}
</script>
