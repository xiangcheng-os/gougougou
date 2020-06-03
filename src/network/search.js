import {request} from "./request";

export function getHomeSearch() {
  return request({
    url:'/goods/search'
  })
}

export function getqSearch() {
  return request({
    url:'/goods/qsearch'
  })
}