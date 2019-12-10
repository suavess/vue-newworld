import { getInfo } from '@/api/user'
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
  login ({ commit }, data) {
    const { roles, token } = data
    return new Promise((resolve, reject) => {
      // commit('SET_ROLES', data.roles)
      commit('SET_TOKEN', token)
      setToken(token)
      resolve(roles)
    })
  },

  // get user info
  getInfo ({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo().then(response => {
        const { data } = response
        commit('SET_NAME', data.name)
        commit('SET_EMAIL', data.email)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout ({ commit }) {
    commit('SET_TOKEN', '')
    commit('SET_NAME', '')
    commit('SET_EMAIL', '')
    removeToken()
  },

  // remove token
  resetToken ({ commit }) {
    commit('SET_TOKEN', '')
    commit('SET_NAME', '')
    commit('SET_EMAIL', '')
    removeToken()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
