import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../Services/Event.service'
import router from '../router/index'
/* eslint-disable */

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [],
    isUserLoggedIn: false,
    errorAlertMessage: null,
    showErrrorAlert: false,
    successAlertMessage: null,
    showSuccessAlert: false,
    loading: false,
    userTodos: null
  },
  mutations: {
    // commit user
    setUser (state, user) {
      state.user = user
      if (user.length > 0) {
        state.isUserLoggedIn = true
      }
    },
     // set loading
     setLoading (state, item) {
      state.loading = item
    },
    // set todo
    setTodo (state, item) {
      state.userTodos = item
    },
    // set success message
    setSuccessAlert (state, item) {
      state.successAlertMessage = item.successMessage
      state.showSuccessAlert = item.showSuccess
      state.loading = false
    },
    // set error message
    setErrorAlert (state, item) {
      state.errorAlertMessage = item.errorMessage
      state.showErrrorAlert = item.showError
      state.loading = false
    },
  },
  actions: {
    // logOut
    logOut ({ commit }, payload) {
      Vue.$cookies.remove('tAt')
      commit('setUser', payload.user)
      router.push('/')
    },
    // register a user
    async registerUser ({ commit, dispatch }, payload) {
      try {
        commit("setLoading", true)
        const result = await Api.register(payload)
        if (result.status === 200 && result.data.results.affectedRows === 1) {
          commit('setUser', [result.data.user])
          Vue.$cookies.set('tAt', result.data.token, '12d')
          router.push('/dashboard')
          commit("setLoading", false)
        } else {
          dispatch('setErrorAlert', {
            message: result.data.message,
            status: true
          })
        }
      } catch (e) {
        dispatch('setErrorAlert', {
          message: e,
          status: true
        })
      }
    },
    // login a user
    async loginUser ({ commit, dispatch }, payload) {
      try {
        const result = await Api.login(payload)
        if (result.status === 201 && result.data.status === 'success') {
          commit('setUser', [result.data.user])
          Vue.$cookies.set('tAt', result.data.token, '12d')
          router.push('/dashboard')
          commit("setLoading", false)
        } else {
          dispatch('setErrorAlert', {
            message: result.data.message,
            status: true
          })
        }
      } catch (e) {
        dispatch('setErrorAlert', {
          message: e,
          status: true
        })
      }
    },
    // dispatch error alert
    setErrorAlert ({ commit }, payload) {
      const item = {
        errorMessage: payload.message,
        showError: payload.status
      }
      commit("setErrorAlert", item)
      commit("setLoading", false)
    },
    // dispatch error alert
    setSuccessAlert ({ commit }, payload) {
      const item = {
        successMessage: payload.message,
        showSuccess: payload.status
      }
      commit("setSuccessAlert", item)
      commit("setLoading", false)
    },
     // get todos
     async getUserTodo ({ commit, dispatch }, payload) {
      try {
        commit("setLoading", true)
        const result = await Api.getUserTodo(payload.userID)
        if (result.status === 200) {
          commit("setTodo", result.data.result)
          console.log(result)
          commit("setLoading", false)
        } else {
          dispatch('setErrorAlert', {
            message: result.data.message,
            status: true
          })
        }
      } catch (e) {
        dispatch('setErrorAlert', {
          message: e,
          status: true
        })
      }
    },
     // add todos
     async addUserTodo ({ commit, dispatch }, payload) {
      try {
        commit("setLoading", true)
        const result = await Api.addUserTodo(payload.todoData)
        if (result.status === 200) {
          await dispatch({
            type: 'getUserTodo',
            userID: payload.userID
          })
          commit("setLoading", false)
        } else {
          dispatch('setErrorAlert', {
            message: result.data.message,
            status: true
          })
        }
      } catch (e) {
        dispatch('setErrorAlert', {
          message: e,
          status: true
        })
      }
    },
    // add todos
    async markUserTodo ({ commit, dispatch }, payload) {
      try {
        commit("setLoading", true)
        const result = await Api.markTodo(payload. todo_id, payload.completed)
        if (result.status === 200) {
          await dispatch('setSuccessAlert', {
            message: result.data.message,
            status: true
          })
          commit("setLoading", false)
        } else {
          dispatch('setErrorAlert', {
            message: result.data.message,
            status: true
          })
        }
      } catch (e) {
        dispatch('setErrorAlert', {
          message: e,
          status: true
        })
      }
    },
    // edit user password
    async editUserPassword ({ commit, dispatch }, payload) {
      try {
        commit("setLoading", true)
        const result = await Api.editPassword(payload.userID, payload.passwordData)
        if (result.status === 200) {
          await dispatch('setSuccessAlert', {
            message: result.data.message,
            status: true
          })
          commit("setLoading", false)
        } else {
          dispatch('setErrorAlert', {
            message: result.data.message,
            status: true
          })
        }
      } catch (e) {
        dispatch('setErrorAlert', {
          message: e,
          status: true
        })
      }
    },
    // editUserProfile
    async editUserProfile ({ commit, dispatch }, payload) {
      try {
        commit("setLoading", true)
        const result = await Api.editUserProfile(payload.userID, payload.profileData)
        if (result.status === 200) {
          Vue.$cookies.set('tAt', result.data.token, '12d')
          commit('setUser', [result.data.user])
          await dispatch('setSuccessAlert', {
            message: result.data.message,
            status: true
          })
          commit("setLoading", false)
        } else {
          dispatch('setErrorAlert', {
            message: result.data.message,
            status: true
          })
        }
      } catch (e) {
        dispatch('setErrorAlert', {
          message: e,
          status: true
        })
      }
    },
  },
  getters: {
    getDate () {
      let d = new Date();
      let date = d.getUTCDate();
      let month = d.getUTCMonth();
      let year = d.getUTCFullYear();
      let datenow = `${year}-${month}-${date}`
      return datenow;
    },
    getTime () {
      let d = new Date()
      let H = d.getHours();
      let M = d.getMinutes();
      let S = d.getSeconds();
      let time = `${H}:${M}:${S}`;
      return time; 
    }
  },
  modules: {
  }
})
