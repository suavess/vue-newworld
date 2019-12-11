import request from '@/utils/request'

// 用户登录请求
export function login (data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

// 用户退出登录请求
export function logout () {
  return request({
    url: '/user/login',
    method: 'delete'
  })
}

// 用户注册请求
export function register (data) {
  return request({
    url: '/user',
    method: 'post',
    data
  })
}

// 获取当前用户信息
export function info () {
  return request({
    url: '/user',
    method: 'get'
  })
}

// 修改当前用户信息
export function update () {
  return request({
    url: '/user',
    method: 'put'
  })
}
