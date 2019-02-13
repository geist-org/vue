<template lang="pug">
    div
      zi-note(error label="错误呀")
        span 流水的妹仔，铁打的小月牙
      br
      zi-note(hint)
        span 流水的妹仔，铁打的小月牙
      br
      zi-note(type="alert")
        span 流水的妹仔，铁打的小月牙
      br
      zi-note(label="test")
         span 流水的妹仔，铁打的小月牙
      br
      zi-note
         span 流水的妹仔，铁打的小月牙
</template>

<script>
export default {
  name: 'ex-note-type',
}
</script>
