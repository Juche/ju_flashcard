<template>
  <div class="open-folder">
    <!-- 优化加强样式 & 清空按钮??? -->
    <div class="status-icon" @click="openDir">
      <img src="https://api.iconify.design/line-md:folder.svg" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { imageList, mediaList, switchCard } from '../../state'
  import { filterImage, filterMedia } from '../../utils'

  const openDir = async () => {
    imageList.value = []
    mediaList.value = []

    const res = await window.showDirectoryPicker({})
    await parseFile(res)

    switchCard(0)

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

      imageList.value = sortFileList(imageList.value)
      mediaList.value = sortFileList(mediaList.value)
    }
  }

  function sortFileList(list: TFile[]) {
    return list.sort(
      // TODO: 根据文件拓展命名规则进行匹配排序
      (a, b) => Number(a.name.split('.')[0]) - Number(b.name.split('.')[0]),
    )
  }
</script>

<style lang="scss" scoped></style>
