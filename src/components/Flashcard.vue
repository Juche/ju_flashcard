<template>
  <!-- :centeredSlides="true" -->
  <!-- :spaceBetween="30" -->
  <swiper
    :autoplay="{
      delay: 250000,
      disableOnInteraction: false,
    }"
    :grabCursor="true"
    :effect="'cube'"
    :cubeEffect="{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }"
    :keyboard="{
      enabled: true,
    }"
    :loop="true"
    :modules="modules"
    :navigation="true"
    :pagination="{
      clickable: true,
      type: 'fraction', // 数字分页
    }"
    :slidesPerView="1"
    :zoom="true"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
      </div>
    </swiper-slide>
    <!-- <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide> -->
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue'

  // Import Swiper styles
  import 'swiper/css'
  import 'swiper/css/effect-cards'
  import 'swiper/css/effect-creative'
  import 'swiper/css/effect-cube'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import 'swiper/css/zoom'

  import '../style.css'

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

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [
          Autoplay,
          EffectCards,
          EffectCreative,
          EffectCube,
          Keyboard,
          Pagination,
          Navigation,
          Zoom,
        ],
      }
    },
  }
</script>
