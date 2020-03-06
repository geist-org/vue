<template lang="pug">
div
  .zi-tabs-container
    .zi-item-wrapper(v-for="(item, index) in titles"
                     :key="item.value + index"
                     @click="select(item)"
                     :class="{ disabled }")
      .zi-tabs-item(:class="{ active: isSelected(item.value) }")
        component(:is="item.icon" v-show="item.icon" class="icon")
        div {{ item.label }}
  slot
</template>

<script>
export default {
  name: 'zi-tabs',

  data: () => ({
    titles: [],
    selected: '',
    subscribers: [],
  }),

  props: {
    disabled: Boolean,
  },

  mounted() {
    this.appendTabs(true)
  },

  methods: {
    appendTabs(defaultSetting) {
      this.titles = []
      this.titles = this.$children.filter(item => {
        return item.$options.name === 'zi-tabs-item'
      }).map(item => {
        const { label, value, active, icon } = item
        return { label, value, active, icon }
      })
      const activeTab = this.titles.find(item => item.active)
      if (activeTab) {
        this.select(activeTab, defaultSetting)
        return
      }
      this.select(this.titles[0], defaultSetting)
    },

    appendSubscriber(handler) {
      this.subscribers.push(handler)
    },

    isSelected(value) {
      return value === this.selected
    },

    select(item, defaultSetting = false) {
      if (this.disabled && !defaultSetting) return
      const { value, label } = item
      if (!defaultSetting && this.selected !== item.value) this.$emit('label-selected', { label, value })
      this.selected = item.value
      this.subscribers.forEach(func => {
        if (typeof func !== 'function') return
        func()
      })
    },
  },
}
</script>

<style scoped lang="stylus" scoped src="./tabs.styl"/>
