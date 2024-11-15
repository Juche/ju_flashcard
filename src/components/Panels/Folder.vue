<template>
  <div class="folder-panel">
    <div :class="['file-tree', listView ? '' : 'fold']">
      <div
        class="file-item ellipsis"
        v-for="(item, index) in imageList"
        :key="index"
        @click="chooseCard(index)"
      >
        <!-- {{ index }}: {{ item.path }} / {{ item.name }} -->
        <img class="preview" :src="item.src" />{{ item.name }}
      </div>
    </div>
    <!-- <div class="toggle" @click="listView = !listView">
      <img
        v-if="listView"
        src="https://api.iconify.design/line-md:chevron-double-left.svg"
      />
      <img
        v-else
        src="https://api.iconify.design/line-md:chevron-double-right.svg"
      />
    </div> -->
  </div>
</template>

<script setup lang="ts">
  import { currentIndex, imageList, listView, switchCard } from '../../state'

  const chooseCard = (index: number) => {
    console.log(`🚀 ~ chooseCard ~ index:`, index)
    currentIndex.value = index
    switchCard()
  }
</script>

<style scoped>
  .folder-panel {
    position: absolute;
    z-index: 100;
    display: flex;
    align-items: flex-end;
    /* width: 30%; */
    height: calc(100% - 50px);
    /* overflow: auto; */
  }

  .file-tree {
    width: 180px;
    height: 100%;
    overflow: auto;
    background: #f3f3f3;
    box-shadow: 0 -10px 10px #0003;
    /* display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start; */
    transition-property: all;
    transition-duration: 0.5s;
  }

  .file-tree.fold {
    margin-left: -180px;
    box-shadow: 0 0 0 #0000;
  }

  .file-item {
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    font-weight: bold;
  }

  .file-item .preview {
    width: 36px;
    margin-right: 10px;
  }

  .toggle {
    width: 24px;
    line-height: 66px;
    background: #f3f3f3;
    box-shadow: 3px -3px 5px #0002;
    border-radius: 0 20px 0 0;
    text-align: center;
  }
</style>
