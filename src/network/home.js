import {request} from "./request";
export function getHomeMultidata() {
  return request({
    url: '/home/swiperdata'
  })
}

export function getHomeRecommenddata() {
  return request({
    url: '/home/catitems'
  })
}

export function getHomeGoods() {
  return request({
    url: '/home/floordata'
  })
}


export function getCategory() {
  return request({
    url: '/categories'
  })
}


