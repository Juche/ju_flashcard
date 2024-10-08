<template>
  <div class="open-folder">
    <div class="status-icon" @click="openDir">
      <img src="https://api.iconify.design/line-md:folder.svg" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { imageList, mediaList, showImage } from '../../state'
  import { filterImage, filterMedia } from '../../utils'

  // type TFile = {
  //   name: string
  //   path: string
  //   fileHandle: Function
  // }

  // const imageList: Ref<TFile[]> = ref([])
  // const mediaList: Ref<TFile[]> = ref([])
  // const currentIndex = ref(0)
  // const imgSrc = ref()

  const openDir = async () => {
    imageList.value = []
    mediaList.value = []

    const res = await window.showDirectoryPicker({})
    await parseFile(res)

    showImage(imageList.value[0], 0)

    console.log('--imageList--', imageList)
    console.log('--mediaList--', mediaList)
  }

  const parseFile = async (obj: any) => {
    if (obj.entries) {
      const dirs = obj.entries()
      for await (const entry of dirs) {
        if (entry[1].entries) {
          // 文件夹，递归处理
          parseFile(entry[1])
        } else {
          // 文件
          filterImage(entry[0]) &&
            imageList.value.push({
              name: entry[0],
              path: obj.name,
              fileHandle: entry[1],
            })
        }

        filterMedia(entry[0]) &&
          mediaList.value.push({
            name: entry[0],
            path: obj.name,
            fileHandle: entry[1],
          })
      }
    }
  }

  // const showImage = async (item: any, index: number) => {
  //   const file = await item.fileHandle.getFile()
  //   console.log(`🚀 ~ showImage ~ file:`, file)

  //   // const reader = new FileReader();
  //   // reader.onload = (e) => {
  //   //   img.src = e.target.result;
  //   // };
  //   // reader.readAsDataURL(file);

  //   imgSrc.value = URL.createObjectURL(file)
  //   console.log(`🚀 ~ showImage ~ imgSrc:`, imgSrc.value)
  // }
</script>

<style lang="scss" scoped></style>
