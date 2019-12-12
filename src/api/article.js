import request from '@/utils/request'

// 添加文章
export function create(data) {
  return request({
    url: '/articles',
    method: 'post',
    data
  })
}

// 获取文章列表，分页
export function list(data) {
  return request({
    url: '/articles',
    method: 'get',
    params: data
  })
}

// 获取关注用户的文章列表，分页
export function feedList(data) {
  return request({
    url: '/articles/feed',
    method: 'get',
    params: data
  })
}

// 通过id查询某一篇文章
export function findById(id) {
  return request({
    url: `/articles/${id}`,
    method: 'get'
  })
}
