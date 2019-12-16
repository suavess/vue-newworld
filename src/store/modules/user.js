import { info, login, logout } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken(),
  name: '',
  email: '',
  image: '',
  id: null
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
  },
  SET_IMAGE: (state, image) => {
    state.image = image
  },
  SET_ID: (state, id) => {
    state.id = id
  }
}

const actions = {
  // user login
  userLogin({ commit }, user) {
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
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      info().then(response => {
        const { data } = response
        commit('SET_NAME', data.username)
        commit('SET_EMAIL', data.email)
        commit('SET_IMAGE', data.image)
        commit('SET_ID', data.id)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      logout().then(() => {
        commit('SET_TOKEN', '')
        commit('SET_NAME', '')
        commit('SET_EMAIL', '')
        commit('SET_IMAGE', '')
        commit('SET_ID', '')
        removeToken()
        location.reload()
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
