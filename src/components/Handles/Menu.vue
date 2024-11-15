<template>
  <div class="handle-ctn menu-ctrl">
    <div class="status-icon" @click="menuView = !menuView">
      <img
        v-if="menuView"
        src="https://api.iconify.design/line-md:cog-filled-loop.svg"
      />
      <img v-else src="https://api.iconify.design/line-md:cog-loop.svg" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { menuView } from '../../state'
</script>

<style lang="scss" scoped></style>
