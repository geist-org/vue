<template lang="pug">
div
  zi-tabs
    zi-tabs-item(v-for="(item, index) in items" :label="item.label" :value="item.value" :key="item.value + index" :icon="item.icon")
      zi-note {{ `${item.label} content` }}
</template>

<script>
import settings from '@geist-ui/vue-icons/packages/settings'
import lambda from '@geist-ui/vue-icons/packages/lambda'
import server from '@geist-ui/vue-icons/packages/server'

export default {
  name: 'ex-tabs-icon',

  components: { settings, lambda, server },

  data: () => ({
    items: [
      { label: 'Setting', value: 'setting', icon: settings },
      { label: 'Lambda', value: 'lambda', icon: lambda },
      { label: 'Server', value: 'server', icon: server },
    ],
  }),
}
</script>
