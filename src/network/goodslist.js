import {request} from './request'
export function getGoodsList(name) {
  return request({
    url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/search?query=' + name
  })
}