<template>
  <div class="play-ctrl">
    <div class="status-icon" @click="">
      <img src="https://api.iconify.design/line-md:round-360.svg" />
    </div>
    <div class="status-icon" @click="">
      <!-- <img src="https://api.iconify.design/mingcute:random-line.svg" /> -->
      <img src="https://api.iconify.design/fe:random.svg" />
    </div>
    <div class="status-icon" @click="autoPlay">
      <img src="https://api.iconify.design/line-md:play.svg" />
    </div>

    <div class="status-icon" @click="audioPlay">
      <img src="https://api.iconify.design/line-md:volume-high.svg" />
      <audio
        ref="audioRef"
        :autoplay="autoplay"
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const audioRef = ref()
  const autoplay = ref(false)

  function audioPlay() {
    console.log(`🚀 ~ audioPlay ~ audioPlay:`)

    audioRef.value.play()
  }

  function autoPlay() {
    autoplay.value = !autoplay.value
    console.log(`🚀 ~ autoPlay ~ autoplay.value:`, autoplay.value)
  }
</script>

<style lang="scss" scoped></style>
