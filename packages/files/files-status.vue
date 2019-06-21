<template>
  <svg v-if="!isExpand" @click="$emit('click', $event)" width="11" height="11" fill="none">
    <rect x="0" y="0" width="11" height="11" rx="1.5" :fill="isDark ? '#000' : '#fff'"></rect>
    <rect x="1" y="1" width="9" height="9" rx="1.5" stroke="#333"></rect>
    <line x1="3.5" y1="5.5" x2="7.5" y2="5.5" :stroke="isDark ? '#666' : '#666'"></line>
    <line x1="5.5" y1="3.5" x2="5.5" y2="7.5" :stroke="isDark ? '#666' : '#666'"></line>
  </svg>
  <svg v-else width="11" @click="$emit('click', $event)" height="11" fill="none">
    <rect x="0" y="0" width="11" height="11" rx="1.5" :fill="isDark ? '#000' : '#fff'"></rect>
    <rect x="1" y="1" width="9" height="9" rx="1.5" stroke="#333"></rect>
    <line x1="3.5" y1="5.5" x2="7.5" y2="5.5" stroke="#333"></line>
  </svg>
</template>

<script>
export default {
  name: 'zi-files-status',

  props: {
    isExpand: Boolean,
    isDark: Boolean,
  },
}
</script>

