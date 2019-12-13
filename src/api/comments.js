import request from '@/utils/request'

// 获取一篇文章的评论列表
export function list(id) {
  return request({
    url: `/comments/${id}`,
    method: 'get'
  })
}
