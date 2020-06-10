import {request} from './request'

export function getDetailData(id) {
  return request({
    url:'/api/public/v1/goods/detail?goods_id=' + id
  })
}
  
