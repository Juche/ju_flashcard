<template>
  <div class="handle-ctn open-folder">
    <!-- 优化加强样式 & 清空按钮??? -->
    <div class="status-icon" @click="openDir">
      <img src="https://api.iconify.design/line-md:folder.svg" />
    </div>
  </div>
  <div class="handle-ctn toggle-list-view">
    <!-- 优化加强样式 & 清空按钮??? -->
    <div class="status-icon" @click="">
      <img src="https://api.iconify.design/line-md:list-3.svg" />
      <img src="https://api.iconify.design/line-md:grid-3.svg" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { currentIndex, imageList, mediaList } from '../../state'
  import { parseFile } from '../../utils'

  const openDir = async () => {
    imageList.value = []
    mediaList.value = []

    const res = await window.showDirectoryPicker({})
    await parseFile(res)

    // switchCard()
    currentIndex.value = 0

    console.log('--imageList--', imageList)
    console.log('--mediaList--', mediaList)
  }
</script>

<style lang="scss" scoped></style>
