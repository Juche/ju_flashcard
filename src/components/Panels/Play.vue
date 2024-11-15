<template>
  <!-- :centeredSlides="true" -->
  <!-- :spaceBetween="30" -->

  <!-- <img v-if="imageList[currentIndex]?.fileHandle" :src="imageSrc" /> -->
  <!-- <h1>{{ JSON.stringify(imageList) }}</h1> -->
  <!-- <h1>{{ imageSrc }}</h1>
  <h1>{{ audioSrc }}</h1> -->
  <!-- <h1>{{ imageList.length }}</h1> -->

  <swiper
    v-if="imageList.length"
    ref="swiperRef"
    class="flashcard-swiper"
    :autoplay="
      autoplay
        ? {
            delay: duration,
            disableOnInteraction: false,
          }
        : false
    "
    :grabCursor="!autoplay"
    :effect="'cube'"
    :cubeEffect="{
      shadow: true,
      slideShadows: false,
      shadowOffset: 20,
      shadowScale: 0.94,
    }"
    :keyboard="{
      enabled: !autoplay,
    }"
    :loop="true"
    :modules="modules"
    :navigation="!autoplay"
    :pagination="{
      // clickable: !autoplay,
      // type: 'fraction', // 数字分页
      dynamicBullets: true,
    }"
    :simulateTouch="!autoplay"
    :slidesPerView="1"
    :zoom="true"
    @autoplayTimeLeft="onAutoplayTimeLeft"
    @swiper="onSwiper"
    @slideChangeTransitionEnd="onSlideChangeTransitionEnd"
  >
    <!--
      @navigationPrev="onNavigationPrev"
      @navigationNext="onNavigationNext"
      @transitionEnd="transitionEnd"
      @transitionStart="transitionStart"
      @touchMove="onTouchMove"
      @touchMoveOpposite="onTouchMoveOpposite"
    -->
    <swiper-slide v-for="(item, index) in imageList" :key="index">
      <!-- {{ item.name }} -->
      <div class="swiper-zoom-container">
        <!-- <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> -->
        <img :src="item.src" />
      </div>
    </swiper-slide>

    <template #container-end>
      <div class="autoplay-progress" v-if="autoplay">
        <svg viewBox="0 0 48 48" ref="progressCircle">
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref="progressContent"></span>
      </div>
    </template>
  </swiper>
</template>
<script setup lang="ts">
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import {
    autoplay,
    currentIndex,
    duration,
    imageList,
    swiperRef,
  } from '../../state'

  // Import Swiper styles
  import 'swiper/css'
  import 'swiper/css/effect-cards'
  import 'swiper/css/effect-creative'
  import 'swiper/css/effect-cube'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import 'swiper/css/zoom'

  // import required modules
  import {
    Autoplay,
    EffectCards,
    EffectCreative,
    EffectCube,
    Keyboard,
    Navigation,
    Pagination,
    Zoom,
  } from 'swiper/modules'
  import { ref } from 'vue'

  const modules = [
    Autoplay,
    EffectCards,
    EffectCreative,
    EffectCube,
    Keyboard,
    Pagination,
    Navigation,
    Zoom,
  ]

  const progressCircle = ref(null)
  const progressContent = ref(null)
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    ;(progressCircle.value as any).style.setProperty('--progress', 1 - progress)
    ;(progressContent.value as any).textContent = `${Math.ceil(time / 1000)}s`
  }

  function onSwiper() {
    console.log('swiper initialized')
  }
  function onSlideChangeTransitionEnd(swiper: any) {
    console.log(`🚀 ~ onSlideChangeTransitionEnd ~ swiper:`, swiper)
    currentIndex.value = swiper.realIndex
    // if (!autoplay.value) return
    // setTimeout(() => {
    //   currentIndex.value = (currentIndex.value + 1) % imageList.value.length
    //   switchCard()
    // }, 120)
  }

  // TODO: 自动发播放和手动操作互斥!!!
  // function onNavigationPrev() {
  //   // console.log('swiper navigationPrev')
  //   // currentIndex.value = (currentIndex.value - 1) % imageList.value.length
  //   // switchCard()
  // }
  // function onNavigationNext() {
  //   // console.log('swiper navigationNext')
  //   // currentIndex.value = (currentIndex.value + 1) % imageList.value.length
  //   // switchCard()
  // }

  // function transitionEnd(swiper: any) {
  //   // swipeDirection: "prev"
  //   // swipeDirection: "next"
  //   // console.log(`🚀 ~ transitionEnd ~ swiper:`, swiper)
  // }
  // function transitionStart(swiper: any) {
  //   // swipeDirection: "prev"
  //   // swipeDirection: "next"
  //   // console.log(`🚀 ~ transitionStart ~ swiper:`, swiper)
  // }
  // function onTouchMove() {
  //   // console.log('swiper onTouchMove')
  // }
  // function onTouchMoveOpposite() {
  //   // console.log('swiper onTouchMoveOpposite')
  // }
</script>

<style>
  .swiper {
    width: 100%;
    height: 90%;
    /* max-width: 80%; */
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    /* background: #0006; */
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }

  .autoplay-progress {
    background: #ff03;
    position: absolute;
    right: 16px;
    bottom: 16px;
    z-index: 10;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: var(--swiper-theme-color);
  }

  .autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 4px;
    stroke: var(--swiper-theme-color);
    fill: none;
    stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
  }
</style>
