<template>
  <div class="file-tree">
    <!-- <button class="open_file" @click="openFile">打开文件</button> -->
    <button class="open_file" @click="openDir">打开文件夹</button>

    <div v-for="(item, index) in imageList" :key="index">
      <div class="file-item" @click="showImage(item, index)">
        {{ index }}: {{ item.path }} / {{ item.name }}
      </div>
    </div>
  </div>

  <div class="content">
    <img v-if="imageList[currentIndex]?.fileHandle" :src="imgSrc" />
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
  import { Ref, ref } from 'vue'

  type TFile = {
    name: string
    path: string
    fileHandle: Function
  }

  const codeText = ref('')
  const imageList: Ref<TFile[]> = ref([])
  const mediaList: Ref<TFile[]> = ref([])
  const currentIndex = ref(0)
  const imgSrc = ref()

  // const openFile = async () => {
  //   const res = await window.showOpenFilePicker({
  //     multiple: true,
  //   })
  //   console.log(`🚀 ~ openFile ~ res:`, res)

  //   const parseFile = async (obj: any) => {
  //     for (const file of res) {
  //       if (file.kind === 'file') {
  //         filterImage(file.name) &&
  //           imageList.value.push({
  //             name: file.name,
  //             path: '.',
  //             fileHandle: file,
  //           })
  //       }
  //     }
  //   }
  //   await parseFile(res)
  //   showImage(imageList.value[0], 0)
  //   console.log('--imageList--', imageList)
  // }

  const openDir = async () => {
    const res = await window.showDirectoryPicker({})
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
    await parseFile(res)
    showImage(imageList.value[0], 0)
    console.log('--imageList--', imageList)
    console.log('--mediaList--', mediaList)
  }

  // const showCode = async (item: any, index: number) => {
  //   const file = await item.fileHandle.getFile()
  //   console.log(`🚀 ~ showCode ~ file:`, file)
  //   const text = await file.text()
  //   console.log(`🚀 ~ showCode ~ text:`, text)
  //   codeText.value = text
  //   currentIndex.value = index
  // }

  const filterImage = (fileName: string) => {
    // [图像文件类型与格式指南](https://developer.mozilla.org/zh-CN/docs/Web/Media/Formats/Image_types)
    // .apng / .avif / .bmp / .gif  / .cur / .ico / .jfif / .jpg / .jpeg / .pjpeg / .pjp / .png / .svg / .webp

    // (
    //   fileName.endsWith('.jpg') ||
    //   fileName.endsWith('.jpeg') ||
    //   fileName.endsWith('.png') ||
    //   fileName.endsWith('.apng') ||
    //   fileName.endsWith('.gif') ||
    //   fileName.endsWith('.webp') ||
    //   fileName.endsWith('.bmp') ||
    //   fileName.endsWith('.svg') ||
    //   fileName.endsWith('.ico') ||
    //   fileName.endsWith('.jfif') ||
    //   fileName.endsWith('.avif ')
    // )

    const regex =
      /\.(apng|avif|bmp|gif|cur|ico|jfif|jpg|jpeg|pjpeg|pjp|png|svg|webp)$/i

    const isImage = regex.test(fileName)
    return isImage
  }

  const filterMedia = (fileName: string) => {
    return fileName.endsWith('.mp3') || fileName.endsWith('.wav')
  }

  const showImage = async (item: any, index: number) => {
    const file = await item.fileHandle.getFile()
    console.log(`🚀 ~ showImage ~ file:`, file)

    // const reader = new FileReader();
    // reader.onload = (e) => {
    //   img.src = e.target.result;
    // };
    // reader.readAsDataURL(file);

    imgSrc.value = URL.createObjectURL(file)
    console.log(`🚀 ~ showImage ~ imgSrc:`, imgSrc.value)
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
