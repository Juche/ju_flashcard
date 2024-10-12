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
      slideShadows: true,
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
      clickable: !autoplay,
      type: 'fraction', // 数字分页
    }"
    :simulateTouch="!autoplay"
    :slidesPerView="1"
    :zoom="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    @navigationPrev="onNavigationPrev"
    @navigationNext="onNavigationNext"
    @transitionEnd="transitionEnd"
    @transitionStart="transitionStart"
  >
    <!-- @touchMove="onTouchMove"
    @touchMoveOpposite="onTouchMoveOpposite" -->
    <swiper-slide v-for="item in imageList.length" :key="item">
      <!-- {{ item.name }} -->
      <div class="swiper-zoom-container">
        <!-- <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> -->
        <img :src="imageSrc" />
      </div>
    </swiper-slide>
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
    imageSrc,
    switchCard,
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

  function onSwiper() {
    console.log('swiper initialized')
  }
  function onSlideChange() {
    // console.log('swiper slideChange')
    // if (!autoplay.value) return
    // setTimeout(() => {
    //   currentIndex.value = (currentIndex.value + 1) % imageList.value.length
    //   switchCard()
    // }, 120)
  }

  // TODO: 自动发播放和手动操作互斥!!!
  function onNavigationPrev() {
    console.log('swiper navigationPrev')
    currentIndex.value = (currentIndex.value - 1) % imageList.value.length
    switchCard()
  }
  function onNavigationNext() {
    console.log('swiper navigationNext')
    currentIndex.value = (currentIndex.value + 1) % imageList.value.length
    switchCard()
  }

  function transitionEnd(swiper: any) {
    // swipeDirection: "prev"
    // swipeDirection: "next"
    console.log('swiper transitionEnd')
    console.log(`🚀 ~ transitionEnd ~ swiper:`, swiper)
  }
  function transitionStart(swiper: any) {
    // swipeDirection: "prev"
    // swipeDirection: "next"
    console.log('swiper transitionStart')
    console.log(`🚀 ~ transitionStart ~ swiper:`, swiper)
  }
  // function onTouchMove() {
  //   // console.log('swiper onTouchMove')
  // }
  // function onTouchMoveOpposite() {
  //   // console.log('swiper onTouchMoveOpposite')
  // }
</script>

<style>
  .swiper {
    height: 80%;
    max-width: 80%;
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
</style>
