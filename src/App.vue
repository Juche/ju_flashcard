<script setup lang="ts">
  import Flashcard from './components/Flashcard.vue'
  import Settings from './components/Settings.vue'
  import StatusBar from './components/StatusBar.vue'
</script>

<template>
  <Flashcard />
  <Settings />
  <StatusBar />
</template>

<style>
  #app {
    /* margin-top: 60px; */
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding-bottom: 36px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border: 1px solid #eee;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
