import { Ref, ref } from 'vue'

/* 图片 & 音频状态 START */
export const imageList: Ref<TFile[]> = ref([])
export const mediaList: Ref<TFile[]> = ref([])
export const currentIndex = ref(0)
export const imageSrc = ref()
export const audioSrc = ref()

async function getObjURL(list: TFile[], index: number) {
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
  imageSrc.value = await getObjURL(imageList.value, currentIndex.value)
  console.log(`🚀 ~ switchCard ~ imageSrc:`, imageSrc.value)
  audioSrc.value = await getObjURL(mediaList.value, currentIndex.value)
  console.log(`🚀 ~ switchCard ~ audioSrc:`, audioSrc.value)
}

/* 图片 & 音频状态 END */

/* 状态栏状态 START */

// playMode: 0-顺序播放 1-随机播放
// autoplay: true-自动播放 false-不自动播放
// duration: 5000ms-播放时长
// loopPlay: true-循环播放 false-不循环
// isPlaying: false-暂停 true-播放
// menuVisible: true-菜单可见 false-菜单不可见
// showSetting: true-设置可见 false-设置不可见
// dirReverse: true-状态栏倒序 false-状态栏正序
export const playMode = ref(0)
export const autoplay = ref(true)
export const duration = ref(5000)
export const loopPlay = ref(true)
export const isPlaying = ref(false)
export const menuVisible = ref(false)
export const showSetting = ref(false)
export const dirReverse = ref(false)

/* 状态栏状态 END */
