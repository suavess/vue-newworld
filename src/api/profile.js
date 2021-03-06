import request from '@/utils/request'

// 关注某个用户
export function follow(data) {
  return request({
    url: '/profiles/follow',
    method: 'post',
    data
  })
}

// 取消关注某个用户
export function unFollow(data) {
  return request({
    url: '/profiles/follow',
    method: 'delete',
    data
  })
}

// 通过id查询某个用户的信息
export function info(data) {
  return request({
    url: '/profiles',
    method: 'get',
    params: data
  })
}
