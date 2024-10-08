// export const EventBus = new Vue();

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
