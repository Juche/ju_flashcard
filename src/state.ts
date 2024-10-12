import { Ref, ref } from 'vue'

export const swiperRef = ref()

/* 图片 & 音频状态 START */
export const imageList: Ref<TFile[]> = ref([])
export const mediaList: Ref<TFile[]> = ref([])
export const currentIndex = ref(0)
export const imageSrc = ref()
export const audioSrc = ref()

export async function getObjURL(list: TFile[], index: number) {
  const item = list[index]
  const file = await item.fileHandle.getFile()

  // const reader = new FileReader();
  // reader.onload = (e) => {
  //   img.src = e.target.result;
  // };
  // reader.readAsDataURL(file);

  const objURL = URL.createObjectURL(file)

  return objURL
}

export const switchCard = async () => {
  // swiperRef.value?.$el.swiper.updateSlides()
  // swiperRef.value?.$el.swiper.slideTo(currentIndex.value, 0, false)
  // TODO: 这里切换索引依然有问题，待优化
  swiperRef.value?.$el.swiper.slideToLoop(currentIndex.value, 200, false)
  // imageSrc.value = await getObjURL(imageList.value, currentIndex.value)
  // console.log(`🚀 ~ switchCard ~ imageSrc:`, imageSrc.value)
  // audioSrc.value = await getObjURL(mediaList.value, currentIndex.value)
  // console.log(`🚀 ~ switchCard ~ audioSrc:`, audioSrc.value)
}

/* 图片 & 音频状态 END */

/* 状态栏状态 START */

// isRandom: true-随机播放 false-顺序播放
// autoplay: true-自动播放 false-不自动播放
// duration: 5000ms-播放时长
// loopPlay: true-循环播放 false-不循环
// isPlaying: false-暂停 true-播放
// menuVisible: true-菜单可见 false-菜单不可见
// showSetting: true-设置可见 false-设置不可见
// dirReverse: true-状态栏倒序 false-状态栏正序
export const isRandom = ref(false)
export const autoplay = ref(false)
export const duration = ref(5000)
export const loopPlay = ref(true)
export const isPlaying = ref(false)
export const menuVisible = ref(false)
export const showSetting = ref(false)
export const dirReverse = ref(false)

// TODO: 多种切换模式配置
const effect = ref('cube') // 'slide', 'fade', 'cube', 'coverflow', 'flip', 'creative' or 'cards'
// TODO: 状态栏状态模式配置

/* 状态栏状态 END */
