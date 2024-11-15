<template>
  <div class="handle-ctn">
    <div class="status-icon" @click="listView = !listView">
      <img
        v-if="listView"
        src="https://api.iconify.design/line-md:list-3-twotone.svg"
      />
      <img v-else src="https://api.iconify.design/line-md:list-3.svg" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { listView } from '../../state'
</script>

<style lang="scss" scoped></style>
