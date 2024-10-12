<template>
  <div class="handle-ctn turn">
    <!-- 状态栏翻转 -->
    <div class="status-icon" @click="reverseDir">
      <img src="https://api.iconify.design/line-md:arrows-horizontal.svg" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { dirReverse } from '../../state'

  function reverseDir() {
    dirReverse.value = !dirReverse.value
  }
</script>

<style lang="scss" scoped></style>
