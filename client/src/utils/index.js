import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig()

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function getImageSrc({imageUrl = '', images = []} = {}) {
  let src = imageUrl ? imageUrl : `${publicRuntimeConfig.STATIC_PATH}/${images[images.length - 1]?.path}`
  return src
}