<template>
  <div class="file-tree">
    <button class="open_file" @click="openFile">打开文件</button>
    <button class="open_file" @click="openDir">打开文件夹</button>

    <div v-for="(item, index) in fileList" :key="index">
      <div class="file-item" @click="showImage(item, index)">
        {{ item.name }} - {{ item.path }} - {{ item.fileHandle }}
      </div>
    </div>
  </div>

  <div class="content">
    <img v-if="fileList[currentIndex]?.fileHandle" :src="file" />
  </div>

  <!-- <div class="show_code">
    <pre v-highlight>
        <code class="lang-dart">
            {{ codeText }}
        </code>
   </pre>
  </div> -->
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const codeText = ref('')
  const fileList = ref([])
  const currentIndex = ref(0)
  const file = ref()

  const openFile = async () => {
    const res = await window.showOpenFilePicker({
      // multiple: true,
    })
    console.log(res.length)
  }

  const openDir = async () => {
    const res = await window.showDirectoryPicker({})
    const detalAction = async (obj: any) => {
      if (obj.entries) {
        const dirs = obj.entries()
        for await (const entry of dirs) {
          if (entry[1].entries) {
            // 文件夹，递归处理
            detalAction(entry[1])
          } else {
            // 文件
            fileList.value.push({
              name: entry[0],
              path: obj.name,
              fileHandle: entry[1],
            })
          }
        }
      }
    }
    await detalAction(res)
    showCode(fileList.value[0], 0)
    console.log('--fileList--', fileList)
  }

  const showCode = async (item: any, index: number) => {
    const file = await item.fileHandle.getFile()
    console.log(`🚀 ~ showCode ~ file:`, file)
    const text = await file.text()
    console.log(`🚀 ~ showCode ~ text:`, text)
    codeText.value = text
    currentIndex.value = index
  }

  const showImage = async (item: any, index: number) => {
    file.value = await item.fileHandle.getFile()
    console.log(`🚀 ~ showCode ~ file:`, file.value)
  }
</script>

<style scoped>
  .file-tree {
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
  }

  .file-item {
    line-height: 36px;
    border-bottom: 1px solid #eee;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 100%;
    border-left: 1px solid #eee;
  }
</style>
