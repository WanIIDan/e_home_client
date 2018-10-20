import Vue from 'vue'
import Vuex from 'vuex'
import { Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
var http = require('http')

Vue.use(Vuex)

const store = new Store({
  state: {
    token: '',
    userinfo: null,

  },
  mutations: {
    setUser(state, userinfo) {
        state.userInfo = userinfo
    },
    setToken(state, token) {
        state.token = token
    },
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => sessionStorage.getItem(key),
        setItem: (key, value) =>
        sessionStorage.setItem(key, value, { expires: 3, secure: true }),
        removeItem: key => sessionStorage.removeItem(key),
      },
    }),
  ],
})

export default store