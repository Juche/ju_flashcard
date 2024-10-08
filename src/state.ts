import { Ref, ref } from 'vue'

type TFile = {
  name: string
  path: string
  fileHandle: Function
}

export const imageList: Ref<TFile[]> = ref([])
export const mediaList: Ref<TFile[]> = ref([])
export const currentIndex = ref(0)
export const imgSrc = ref()

export const showImage = async (item: any, index: number) => {
  const file = await item.fileHandle.getFile()
  console.log(`🚀 ~ showImage ~ file:`, file)

  // const reader = new FileReader();
  // reader.onload = (e) => {
  //   img.src = e.target.result;
  // };
  // reader.readAsDataURL(file);

  imgSrc.value = URL.createObjectURL(file)
  console.log(`🚀 ~ showImage ~ imgSrc:`, imgSrc.value)
}
