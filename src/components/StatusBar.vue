<template>
  <div
    data-tauri-drag-region
    :class="{ 'status-bar': true, 'dir-reverse': dirReverse }"
  >
    <div :class="{ 'status-grp': true, 'dir-reverse': dirReverse }">
      <Folder />
      <Turn />
    </div>
    <div :class="{ 'status-grp': true, 'dir-reverse': dirReverse }">
      <Play v-if="imageList.length" />
      <Window />
      <!-- <Menu /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
  import Folder from './Handles/Folder.vue'
  // import Menu from './Handles/Menu.vue'
  import Play from './Handles/Play.vue'
  import Turn from './Handles/Turn.vue'
  import Window from './Handles/Window.vue'

  import { dirReverse, imageList } from '../state'
</script>

<style>
  .status-bar {
    display: flex;
    /* flex-direction: row-reverse; */
    /* justify-content: flex-end; */
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: #fff8;
    user-select: none;
  }

  .status-grp {
    display: flex;
    /* align-items: flex-end; */
    align-items: center;
  }

  .handle-ctn {
    display: flex;
    height: 36px;
  }

  .dir-reverse {
    flex-direction: row-reverse;
  }

  .open-folder {
    /* align-self: center; */
    height: 50px;
    /* background: #f003; */
  }
  .play-ctrl {
    /* background: #0f03; */
  }
  .window-ctrl {
    /* background: #00f3; */
  }
  .menu-ctrl {
    /* padding: 0; */
    /* width: 50px; */
    height: 50px;
    /* background: #f0f3; */
    /* border-radius: 50%; */
  }

  .status-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    /* width: 32px; */
    height: 100%;
  }
  .status-icon:hover {
    background: #0002;
  }
  .status-icon img {
    width: 30px;
    height: 30px;
  }

  .menu-ctrl .status-icon {
    /* padding: 0; */
    /* width: 100%; */
  }
  .menu-ctrl .status-icon img {
    width: 50px;
    height: 50px;
  }

  .play-ctrl .status-icon img {
    width: 32px;
    height: 32px;
  }

  .open-folder .status-icon img {
    width: 45px;
    height: 45px;
  }
</style>
