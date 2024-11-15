<template>
  <div class="handle-ctn menu-ctrl">
    <div class="status-icon" @click="menuView = !menuView">
      <img src="https://api.iconify.design/line-md:cog-loop.svg" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { menuView } from '../../state'
</script>

<style lang="scss" scoped></style>
