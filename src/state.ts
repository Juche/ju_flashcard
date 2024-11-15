import { computed, Ref, ref } from 'vue'

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
// loopPlay: true-循环播放 false-不循环
// isPlaying: false-暂停 true-播放
// menuVisible: true-菜单可见 false-菜单不可见
// showSetting: true-设置可见 false-设置不可见
// dirReverse: true-状态栏倒序 false-状态栏正序
export const isRandom = ref(false)
export const autoplay = ref(false)
export const loopPlay = ref(true)
export const isPlaying = ref(false)
export const menuVisible = ref(false)
export const showSetting = ref(false)
export const dirReverse = ref(false)

// TODO: 配置菜单
export const _duration = ref(5)
export const _effect = ref('cube')

export const duration = computed(() => {
  return (Number(localStorage.getItem('duration')) || _duration.value) * 1000 || 5000
})
// effect: 轮播切换模式配置
// cube: 立方体 / effect: 滚动 / cards: 卡牌 / flip: 翻转
export const effect = computed(() => {
  return localStorage.getItem('effect') || _effect.value
})

export const changeDuration = () => {
  // duration.value = Number(value)
  localStorage.setItem('duration', String(_duration.value))
}
export const changeEffect = () => {
  // effect.value = value
  localStorage.setItem('effect', _effect.value!)
}

// 状态栏布局左右
// 默认播放模式

// 文件和菜单面板配置
export const listView = ref(false)
export const menuView = ref(false)

/* 状态栏状态 END */
