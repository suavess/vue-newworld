import { info, login, logout } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken(),
  name: '',
  email: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_EMAIL: (state, email) => {
    state.email = email
  }
}

const actions = {
  // user login
  login ({ commit }, user) {
    return new Promise((resolve, reject) => {
      login(user).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(e => {
        reject(e)
      })
    })
  },

  // get user info
  getInfo ({ commit }) {
    return new Promise((resolve, reject) => {
      info().then(response => {
        const { data } = response
        commit('SET_NAME', data.name)
        commit('SET_EMAIL', data.email)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      logout().then(() => {
        commit('SET_TOKEN', '')
        commit('SET_NAME', '')
        commit('SET_EMAIL', '')
        removeToken()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
