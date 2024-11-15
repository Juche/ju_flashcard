<template>
  <div class="folder-panel">
    <div :class="['file-tree', isOpen ? '' : 'fold']">
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
    <div class="toggle" @click="isOpen = !isOpen">
      <img
        v-if="isOpen"
        src="https://api.iconify.design/line-md:chevron-double-left.svg"
      />
      <img
        v-else
        src="https://api.iconify.design/line-md:chevron-double-right.svg"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { currentIndex, imageList, switchCard } from '../../state'

  const isOpen = ref(false)

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
    background: #f3f3f3;
    box-shadow: 0 -10px 10px #0003;
    /* display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start; */
    transition-property: all;
    transition-duration: 1s;
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
    /* border-bottom: 1px solid #eee; */
    font-weight: bold;
  }

  .file-item .preview {
    width: 36px;
    margin-right: 10px;
  }

  .toggle {
    width: 20px;
    line-height: 100px;
    background: #f3f3f3;
    box-shadow: 3px -3px 4px #0002;
  }
</style>
