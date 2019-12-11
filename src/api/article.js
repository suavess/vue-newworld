import request from '@/utils/request'

// 添加文章
export function create (data) {
  return request({
    url: '/articles',
    method: 'post',
    data
  })
}
