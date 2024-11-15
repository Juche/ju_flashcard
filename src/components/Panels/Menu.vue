<template>
  <div :class="['menu-panel', menuView ? '' : 'fold']">
    <!-- 文本输入框 -->
    <label for="name">
      <div class="title">播放时长:</div>
      <input
        class="duration-input"
        type="text"
        id="duration"
        name="duration"
        v-model="_duration"
        @change="changeDuration"
      />秒</label
    >

    <!-- 单选按钮 -->
    <div class="title">动画模式:</div>
    <div class="effect-ctn">
      <label for="cube"
        ><input
          type="radio"
          id="cube"
          value="cube"
          v-model="_effect"
        />立方体</label
      >
      <label for="creative"
        ><input
          type="radio"
          id="creative"
          value="creative"
          v-model="_effect"
        />滚动</label
      >
      <label for="cards"
        ><input
          type="radio"
          id="cards"
          value="cards"
          v-model="_effect"
        />卡牌</label
      >
      <label for="flip"
        ><input
          type="radio"
          id="flip"
          value="flip"
          v-model="_effect"
        />翻转</label
      >
      <!-- <label for="slide"
        >slide<input type="radio" id="slide" value="slide"
      /></label> -->
      <!-- <label for="fade"
        >fade<input type="radio" id="fade" value="fade"
      /></label> -->
      <!-- <label for="coverflow"
        >coverflow<input
          type="radio"
          id="coverflow"
          value="coverflow"
      /></label> -->
    </div>

    <!-- <button>保存</button> -->
  </div>
</template>

<script setup lang="ts">
  import { _duration, _effect, changeDuration, menuView } from '../../state'
</script>

<style scoped>
  .menu-panel {
    position: absolute;
    right: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 10px;
    width: 300px;
    height: calc(100% - 50px);
    /* background: #f3f3f3; */
    background: #fff8;
    box-shadow: 0 -8px 10px #0003;
    transition-property: all;
    transition-duration: 0.5s;
  }

  .menu-panel.fold {
    right: -320px;
    box-shadow: 0 0 0 #0000;
  }

  .title {
    margin: 15px 0 8px;
    font-weight: bold;
  }

  .duration-input {
    margin: 0 10px;
    width: 80px;
  }

  .effect-ctn label {
    margin-right: 10px;
  }
</style>
