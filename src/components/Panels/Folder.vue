<template>
  <div class="folder-panel">
    <div class="file-tree">
      <div
        class="file-item ellipsis"
        v-for="(item, index) in imageList"
        :key="index"
        @click="chooseCard(index)"
      >
        <!-- {{ index }}: {{ item.path }} / {{ item.name }} -->
        {{ item.path }}/{{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { currentIndex, imageList, switchCard } from '../../state';

  const chooseCard = (index: number) => {
    currentIndex.value = index
    switchCard()
  }
</script>

<style scoped>
  .folder-panel {
    width: 30%;
    height: 100%;
    overflow: auto;
  }

  .file-tree {
    /* display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start; */
  }

  .file-item {
    padding: 0 10px;
    width: 100%;
    line-height: 50px;
    box-sizing: border-box;
    /* border-bottom: 1px solid #eee; */
  }
</style>
