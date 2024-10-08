<template>
  <div class="content">
    <img v-if="imageList[currentIndex]?.fileHandle" :src="imgSrc" />
  </div>
</template>

<script setup lang="ts">
  import { currentIndex, imageList, imgSrc } from '../../state'

  // import { Ref, ref } from 'vue'

  // type TFile = {
  //   name: string
  //   path: string
  //   fileHandle: Function
  // }

  // const imageList: Ref<TFile[]> = ref([])
  // const mediaList: Ref<TFile[]> = ref([])
  // const currentIndex = ref(0)
  // const imgSrc = ref()
</script>

<style scoped>
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 100%;
    /* border-left: 1px solid #eee; */
    overflow: auto;
  }

  .content img {
    /* width: 80%; */
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
