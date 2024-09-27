<template>
  <div data-tauri-drag-region class="titlebar">
    <div class="status-icon" @click="">
      <img src="https://api.iconify.design/line-md:round-360.svg" />
    </div>
    <div class="status-icon" @click="">
      <img src="https://api.iconify.design/mingcute:random-line.svg" />
    </div>
    <div class="status-icon" @click="">
      <img src="https://api.iconify.design/line-md:play.svg" />
    </div>

    <div class="status-icon" @click="">
      <img src="https://api.iconify.design/line-md:volume-high.svg" />
    </div>

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

    <div class="status-icon status-icon-config" @click="">
      <img src="https://api.iconify.design/line-md:cog-loop.svg" />
    </div>

    <!-- <div
      class="status-icon"
      @click="appWindow.setFullscreen(true)"
    >
      <img src="https://api.iconify.design/line-md:monitor-screenshot.svg" />
    </div>
    <div
      class="status-icon"
      @click="appWindow.setFullscreen(false)"
    >
      <img src="https://api.iconify.design/line-md:laptop.svg" />
    </div> -->
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
    /* flex-direction: row-reverse; */
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
  .status-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
  }
  .status-icon:hover {
    background: #5bbec3;
  }

  .status-icon img {
    width: 20px;
    height: 20px;
  }
  .status-icon-config img {
    width: 32px;
    height: 32px;
  }
</style>
