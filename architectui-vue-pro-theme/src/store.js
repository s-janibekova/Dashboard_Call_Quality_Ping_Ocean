import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)



export default new Vuex.Store({
    state: {
        user: '',
        token: ''

    },
    mutations: {

        SET_TOKEN (state, token) {
            state.token = token.data.token
            var tokenBearer = "Bearer" + token.data.token
            localStorage.setItem('user', JSON.stringify(tokenBearer))
          },

          SET_USER_DATA(state, data) {
            state.user = data

          },
          CLEAR_USER_DATA () {
            localStorage.removeItem('user')
            location.reload()
          },

    },

    actions: {
        login ({ commit }, credentials) {
            return axios
              .post('https://api.pingocean.com:8081/auth', credentials)
              .then(data => {
                 localStorage.setItem('user',"Bearer" +  data.data.token)
                const token = localStorage.getItem('user')
            axios.defaults.headers.common['Authorization'] = token
            axios.get("https://api.pingocean.com:8081/profile").then(data =>{
              commit('SET_USER_DATA', data)
              })
          }
              )},
    
    logout ({ commit }) {
      commit('CLEAR_USER_DATA')
    },

},
  
getters: { // <-- Add a getter

  loggedIn (state) {
    return !!state.user
  }
}

})