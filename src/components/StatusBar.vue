<template>
  <div data-tauri-drag-region class="status-bar">
    <Folder />
    <Play />
    <Window />
    <Menu />
  </div>
</template>

<script setup lang="ts">
  import Folder from './Handles/Folder.vue'
  import Menu from './Handles/Menu.vue'
  import Play from './Handles/Play.vue'
  import Window from './Handles/Window.vue'
</script>

<style>
  .status-bar {
    display: flex;
    /* flex-direction: row-reverse; */
    justify-content: flex-end;
    align-items: flex-end;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: #fff8;
    user-select: none;
  }

  .open-folder {
    /* align-self: center; */
    background: #f003;
  }
  .play-ctrl {
    background: #0f03;
  }
  .window-ctrl {
    background: #00f3;
  }
  .menu-ctrl {
    background: #f0f3;
  }

  .status-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
  }
  .status-icon:hover {
    background: #0006;
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
