<template>
  <input
    ref="folderInputRef"
    type="file"
    id="folderInput"
    webkitdirectory
    directory
    multiple
    @change="readFiles()"
  />
  <button @click="readFiles()">读取文件夹</button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const folderInputRef = ref()
  function readFiles() {
    // var folderInput = document.getElementById('folderInput')
    var fileList = folderInputRef.value.files
    readFolderFiles(fileList)
  }

  function readFolderFiles(files) {
    for (var i = 0; i < files.length; i++) {
      var file = files[i]

      if (file.isDirectory) {
        readFolderFiles(file.listFiles())
      } else {
        console.log(file.name)
        // 这里可以根据需要进行文件处理
      }
    }
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
