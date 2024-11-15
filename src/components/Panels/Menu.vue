<template>
  <div :class="['menu-panel', menuView ? '' : 'fold']"></div>
</template>

<script setup lang="ts">
  import { menuView } from '../../state'
</script>

<style scoped>
  .menu-panel {
    position: absolute;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: flex-end;
    width: 200px;
    height: calc(100% - 50px);
    background: #f3f3f3;
    box-shadow: 0 -8px 10px #0003;
    transition-property: all;
    transition-duration: 0.5s;
  }

  .menu-panel.fold {
    right: -200px;
    box-shadow: 0 0 0 #0000;
  }
</style>
