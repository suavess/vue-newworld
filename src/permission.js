import router from './router'
import store from '@/store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

router.beforeEach(async(to, from, next) => {
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login' || to.path === '/register') {
      next({ path: '/home' })
    } else {
      const hasName = store.getters.name
      if (hasName) {
        next()
      } else {
        try {
          await store.dispatch('user/getInfo')
          next({ ...to, replace: true })
        } catch (error) {
          await store.dispatch('user/logout')
          Message.error(error || 'Has Error')
          next('/login')
        }
      }
    }
  } else {
    if (to.path === '/profile' || to.path === '/editor' || to.path === '/settings') {
      Message.error('请先登录！')
      next('/login')
    }
    next()
  }
})

// router.afterEach(() => {
// })
