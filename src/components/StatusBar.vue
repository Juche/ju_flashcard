<template>
  <div data-tauri-drag-region class="titlebar">
    <div
      class="titlebar-button"
      id="titlebar-minimize"
      @click="appWindow.minimize"
    >
      <img src="https://api.iconify.design/line-md:minus.svg" alt="minimize" />
    </div>
    <div class="titlebar-button" id="titlebar-maximize" @click="toggleMaximize">
      <img
        v-if="!isMaxSize"
        src="https://api.iconify.design/line-md:monitor-arrow-up.svg"
        alt="maximize"
      />
      <img
        v-else
        src="https://api.iconify.design/line-md:monitor-arrow-down.svg"
        alt="maximize"
      />
    </div>
    <!-- <div
      class="titlebar-button"
      id="titlebar-fullscreen"
      @click="appWindow.setFullscreen(true)"
    >
      <img
        src="https://api.iconify.design/line-md:monitor-screenshot.svg"
        alt="maximize"
      />
    </div>
    <div
      class="titlebar-button"
      id="titlebar-fullscreen"
      @click="appWindow.setFullscreen(false)"
    >
      <img src="https://api.iconify.design/line-md:laptop.svg" alt="maximize" />
    </div> -->
    <div class="titlebar-button" id="titlebar-close" @click="appWindow.close">
      <img src="https://api.iconify.design/line-md:close.svg" alt="close" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { appWindow } from '@tauri-apps/api/window'
  import { ref } from 'vue'

  // const isMaxSize = computed(async () => await appWindow.isMaximized())
  const isMaxSize = ref(false)

  function toggleMaximize() {
    isMaxSize.value = !isMaxSize.value
    appWindow.toggleMaximize()
  }
</script>

<style scoped>
  .titlebar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 36px;
    background: #eee;
    user-select: none;
  }
  .titlebar-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
  }
  .titlebar-button:hover {
    background: #5bbec3;
  }
</style>
