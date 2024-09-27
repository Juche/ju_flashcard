<script setup lang="ts">
  import Flashcard from './components/Flashcard.vue'
  import Settings from './components/Settings.vue'
</script>

<template>
  <Settings />
  <Flashcard />
</template>

<style>
  #app {
    /* margin-top: 60px; */
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-top: 1px solid #eee;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
