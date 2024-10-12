// export const EventBus = new Vue();

import { imageList, mediaList } from "./state"

// [图像文件类型与格式指南](https://developer.mozilla.org/zh-CN/docs/Web/Media/Formats/Image_types)
// .apng / .avif / .bmp / .gif  / .cur / .ico / .jfif / .jpg / .jpeg / .pjpeg / .pjp / .png / .svg / .webp
export const filterImage = (fileName: string) => {
  const regex =
    /\.(apng|avif|bmp|gif|cur|ico|jfif|jpg|jpeg|pjpeg|pjp|png|svg|webp)$/i

  const isImage = regex.test(fileName)
  return isImage
}

export const filterMedia = (fileName: string) => {
  return fileName.endsWith('.mp3') || fileName.endsWith('.wav')
}


export const parseFile = async (obj: any) => {
  if (obj.entries) {
    const dirs = obj.entries()
    for await (const entry of dirs) {
      if (entry[1].entries) {
        // 文件夹，递归处理
        parseFile(entry[1])
      } else {
        // 文件
        filterImage(entry[0]) &&
          imageList.value.push({
            name: entry[0],
            path: obj.name,
            fileHandle: entry[1],
            src: URL.createObjectURL(await entry[1].getFile()),
          })
      }

      filterMedia(entry[0]) &&
        mediaList.value.push({
          name: entry[0],
          path: obj.name,
          fileHandle: entry[1],
          src: URL.createObjectURL(await entry[1].getFile()),
        })
    }

    imageList.value = sortFileList(imageList.value)
    mediaList.value = sortFileList(mediaList.value)
  }
}

export function sortFileList(list: TFile[]) {
  return list.sort(
    // TODO: 根据文件拓展命名规则进行匹配排序
    (a, b) => Number(a.name.split('.')[0]) - Number(b.name.split('.')[0]),
  )
}
