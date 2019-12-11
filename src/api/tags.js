import request from '@/utils/request'

// 获取标签列表
export function list () {
  return request({
    url: '/tags',
    method: 'get'
  })
}
