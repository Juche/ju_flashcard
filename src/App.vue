<script setup lang="ts">
  import Flashcard from './components/Flashcard.vue'
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <Flashcard msg="Flashcard" />
</template>

<style>
  #app {
    /* margin-top: 60px; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
