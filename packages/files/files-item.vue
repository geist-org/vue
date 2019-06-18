<template lang="pug">
div
  li.item(v-for="(item, i) in files" v-if="item" :key="item.name + i" :class="{ 'has-children': isDir(item.type) && !isTop }")
    zi-files-status.status(v-if="isDir(item.type)" :style="statusStyle" :isExpand="isExpand(i)" @click="toggleExpand(i)")
    a.link(@click="toggleExpand(i, !isDir(item.type), item)")
      span.line(v-if="!isTop" v-for="index in depth" :key="`line-${index}`" :class="lineClasses(i, item, index)")
      zi-files-icon.icon(:is-dir="isDir(item.type)")
      |#[span {{ item.name }}]
    zi-transition-expand
      zi-files-item(v-if="item.files && isExpand(i)"
        :files="item.files"
        :depth="depth + 1"
        :default-expand="defaultExpand"
        @file-click="childClickHandler($event, item)")
</template>

<script>
import { transitions } from '../utils'

const { ZiTransitionExpand } = transitions

export default {
  name: 'zi-files-item',

  components: { ZiTransitionExpand },

  props: {
    files: { type: Array, default: () => ([]) },
    depth: { type: Number, default: 0 },
    defaultExpand: Boolean,
  },

  data: () => ({
    expands: {},
  }),

  computed: {
    isTop() {
      return this.depth === 0
    },

    statusStyle() {
      if (this.depth === 0) return `left: ${-24}px;`
      const left = this.depth * 34 - 28
      return `left: ${left}px;`
    },
  },

  methods: {
    isDir(type) {
      return type !== 'file'
    },

    lineClasses(index, item, depthIndex) {
      const isVirtual = this.depth > 0 && depthIndex !== this.depth
      if (this.files.length === 1) return { only: true }
      if (index === 0 && !isVirtual) return { first: true }
      if (index === this.files.length - 1 && !item.files && !isVirtual) {
        return { last: true }
      }
      return {}
    },

    toggleExpand(index, isFileClick, item) {
      if (isFileClick) return this.fileClick(item)
      this.$set(this.expands, index, !this.expands[index])
    },

    isExpand(index) {
      if (this.expands[index] === undefined) {
        this.$set(this.expands, index, !!this.defaultExpand)
      }
      return !!this.expands[index]
    },

    fileClick(item) {
      this.$emit('file-click', {
        name: item.name,
        trigger: item,
      })
    },

    childClickHandler(event, parent) {
      const nextName = `${parent.name}/${event.name}`
      this.$emit('file-click', {
        name: nextName,
        trigger: event.trigger,
      })
    },
  },
}
</script>

<style scoped lang="stylus">
.item
  line-height 28px
  min-height 28px
  color black
  white-space nowrap
  user-select none
  list-style none
  position relative

.item + .item
  margin-top 0

.status
  position absolute
  z-index 10
  width 12px
  height 12px
  left -28px
  top 8px
  cursor pointer

.line
  background-position center 0
  width 30px
  height 28px
  line-height 28px
  vertical-align top
  background-repeat no-repeat
  background-image linear-gradient(to right, transparent 11px, rgb(234, 234, 234) 11px, rgb(234, 234, 234) 12px, transparent 12px)

  &.first
    background-position center 5px
  &.last
    background-position center -5px
  &.only
    background-position center 10px
    transform translateY(-5px)

.link
  padding-right 1em
  cursor pointer
  text-decoration none
  line-height 28px
  height 28px
  color black
  white-space nowrap
  user-select none
  display flex
  align-items center

  span
    transition font-weight .15s ease-out

  &:hover span
    font-weight 600
</style>
