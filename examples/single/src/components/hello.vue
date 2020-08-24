<template>
  <div>
    <p>hello component.</p>
    <zi-button>zi btn</zi-button>
  </div>
</template>

<script>
import Vue from 'vue'
import '@geist-ui/vue/lib/button.css'
import Button from '@geist-ui/vue/lib/button.common'

Button.install(Vue)
export default {}
</script>
