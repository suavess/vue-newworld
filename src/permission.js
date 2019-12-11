import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // get token from cookie

router.beforeEach(async (to, from, next) => {
  // start progress bar

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login' || to.path === '/register') {
      // if is logged in, redirect to the home page
      next({ path: '/home' })
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      const hasName = store.getters.name
      if (hasName) {
        next()
      } else {
        try {
          // get user info
          await store.dispatch('user/getInfo')
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/logout')
          Message.error(error || 'Has Error')
          next('/login')
        }
      }
    }
  } else {
    if (to.path === '/profile' || to.path === '/editor') {
      Message.error('请先登录！')
      next('/login')
    }
    next()
  }
})

// router.afterEach(() => {
// })
