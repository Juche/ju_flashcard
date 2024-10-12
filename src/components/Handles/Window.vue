<template>
  <div
    :class="{
      'handle-ctn': true,
      'window-ctrl': true,
      'dir-reverse': dirReverse,
    }"
  >
    <div class="status-icon" @click="appWindow.close">
      <img src="https://api.iconify.design/line-md:close.svg" />
    </div>
    <div class="status-icon" @click="appWindow.minimize">
      <img src="https://api.iconify.design/line-md:minus.svg" />
    </div>
    <div class="status-icon" @click="toggleMaximize">
      <img
        v-if="!isMaxSize"
        src="https://api.iconify.design/line-md:monitor-arrow-up.svg"
      />
      <img
        v-else
        src="https://api.iconify.design/line-md:monitor-arrow-down.svg"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { appWindow } from '@tauri-apps/api/window'
  import { ref } from 'vue'
  import { dirReverse } from '../../state'

  const isMaxSize = ref(false)

  function toggleMaximize() {
    isMaxSize.value = !isMaxSize.value
    appWindow.toggleMaximize()
  }
</script>

<style lang="scss" scoped></style>
