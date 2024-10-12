<template>
  <!-- 没有闪卡内容时不显示播放功能键 -->
  <div
    :class="{
      'handle-ctn': true,
      'play-ctrl': true,
      'dir-reverse': dirReverse,
    }"
  >
    <!-- 播放模式切换 -->
    <div class="status-icon" @click="togglePlayMode">
      <!-- <img src="https://api.iconify.design/mingcute:random-line.svg" /> -->
      <img v-if="isRandom" src="https://api.iconify.design/fe:random.svg" />
      <img v-else src="https://api.iconify.design/line-md:round-360.svg" />
    </div>
    <!-- 播放(不显示左右切换按钮) & 暂停状态 -->
    <div class="status-icon" @click="toggleAutoPlay">
      <!-- <img src="https://api.iconify.design/line-md:play.svg" /> -->
      <img
        v-if="autoplay"
        src="https://api.iconify.design/line-md:play-to-pause-transition.svg"
      />
      <img
        v-else
        src="https://api.iconify.design/line-md:pause-to-play-transition.svg"
      />
    </div>
    <!-- 播放时的声音动画 -->
    <div class="status-icon" @click="audioPlay">
      <img src="https://api.iconify.design/line-md:volume-high.svg" />
      <!-- <img src="https://api.iconify.design/line-md:volume-low.svg" />
      <img src="https://api.iconify.design/line-md:volume-medium.svg" /> -->
      <audio
        ref="audioRef"
        :autoplay="autoplay"
        :src="mediaList[currentIndex]?.src"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { nextTick, ref } from 'vue'

  import {
    autoplay,
    currentIndex,
    dirReverse,
    imageList,
    isRandom,
    mediaList,
    swiperRef,
    switchCard,
  } from '../../state'
  import { sortFileList } from '../../utils'

  const audioRef = ref()

  function togglePlayMode() {
    isRandom.value = !isRandom.value

    if (isRandom.value) {
      const randomIndex = Array.from(
        { length: imageList.value.length },
        (v, k) => k,
      ).sort(() => Math.random() - 0.5)
      imageList.value = randomIndex.map(i => imageList.value[i])
      mediaList.value = randomIndex.map(i => mediaList.value[i])
    } else {
      imageList.value = sortFileList(imageList.value)
      mediaList.value = sortFileList(mediaList.value)
    }

    currentIndex.value = 0
    switchCard()
  }

  function toggleAutoPlay() {
    autoplay.value = !autoplay.value
    console.log(`🚀 ~ autoPlay ~ autoplay.value:`, autoplay.value)

    nextTick(() => {
      autoplay.value
        ? swiperRef.value?.$el.swiper.autoplay.start()
        : swiperRef.value?.$el.swiper.autoplay.stop()

      autoplay.value && audioPlay()
    })
  }

  function audioPlay() {
    console.log(`🚀 ~ audioPlay ~ audioPlay:`)

    audioRef.value.play()
  }
</script>

<style lang="scss" scoped></style>
