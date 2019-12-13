import request from '@/utils/request'

// 获取一篇文章的评论列表
export function list(id) {
  return request({
    url: `/comments/${id}`,
    method: 'get'
  })
}
// 获取一篇文章的评论列表
export function create(data) {
  return request({
    url: `/comments`,
    method: 'post',
    data
  })
}

// 获取一篇文章的评论列表
export function del(data) {
  return request({
    url: `/comments`,
    method: 'delete',
    data
  })
}
