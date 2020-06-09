import {request} from './request'

export function getDtailData(id) {
  return request({
    url:'/api/public/v1/goods/detail?goods_id=' + id
  })
}
  
