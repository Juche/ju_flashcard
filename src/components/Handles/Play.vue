<template>
  <!-- 没有闪卡内容时不显示播放功能键 -->
  <div class="play-ctrl">
    <!-- 播放模式切换 -->
    <div class="status-icon" @click="togglePlayMode">
      <img src="https://api.iconify.design/line-md:round-360.svg" />
      <!-- <img src="https://api.iconify.design/mingcute:random-line.svg" /> -->
      <img src="https://api.iconify.design/fe:random.svg" />
    </div>
    <!-- 播放(不显示左右切换按钮) & 暂停状态 -->
    <div class="status-icon" @click="toggleAutoPlay">
      <img src="https://api.iconify.design/line-md:play.svg" />
      <img
        src="https://api.iconify.design/line-md:play-to-pause-transition.svg"
      />
      <img
        src="https://api.iconify.design/line-md:pause-to-play-transition.svg"
      />
    </div>
    <!-- 播放时的声音动画 -->
    <div class="status-icon" @click="audioPlay">
      <img src="https://api.iconify.design/line-md:volume-high.svg" />
      <img src="https://api.iconify.design/line-md:volume-low.svg" />
      <img src="https://api.iconify.design/line-md:volume-medium.svg" />
      <!-- src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" -->
      <audio
        ref="audioRef"
        :autoplay="autoplay"
        :src="mediaList[currentIndex]?.src"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  import { autoplay, currentIndex, mediaList } from '../../state'

  const audioRef = ref()

  function togglePlayMode() {}

  function toggleAutoPlay() {
    autoplay.value = !autoplay.value
    console.log(`🚀 ~ autoPlay ~ autoplay.value:`, autoplay.value)
  }

  function audioPlay() {
    console.log(`🚀 ~ audioPlay ~ audioPlay:`)

    audioRef.value.play()
  }
</script>

<style lang="scss" scoped></style>
