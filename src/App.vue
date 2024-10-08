<script setup lang="ts">
  import OpenFile from './components/OpenFile.vue'
  // import Flashcard from './components/Flashcard.vue'
  // import Settings from './components/Settings.vue'
  import StatusBar from './components/StatusBar.vue'
</script>

<template>
  <OpenFile />
  <!-- <Flashcard />
  <Settings /> -->
  <StatusBar />
</template>

<style>
  @import url(./style.css);

  #app {
    /* margin-top: 60px; */
    display: flex;
    /* justify-content: center;
    align-items: center; */
    box-sizing: border-box;
    padding-bottom: 50px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    /* border: 1px solid #fff8; */
    /* border-radius: 4px; */
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
