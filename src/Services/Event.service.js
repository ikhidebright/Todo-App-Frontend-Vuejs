import Vue from 'vue'
import axios from 'axios'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

/* eslint-disable */

const Api = axios.create({
    baseURL: "http://localhost:9005/",
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': Vue.$cookies.get('tAt')
    }
})

export default {
    // register User
    register (userData) {
        return Api.post('/register', userData)
    },
    // Login User
    login (userData) {
        return Api.post('/login', userData)
    },
    // get UserTodos by UserID
    getUserTodo (userID) {
        return Api.get(`/todo/${userID}`)
    },
    // Add a Todo
    addUserTodo (todoData) {
        return Api.post('/todo', todoData)
    },
    // mark userTodo as done
    markTodo (todoID, completed) {
        return Api.patch(`/todo/${todoID}`, completed)
    },
    // delete todo
    deleteTodo (todoID) {
        return Api.delete(`/todo/${todoID}`)
    },
    // edit user password
    editPassword (userID, passwordData) {
        return Api.patch(`/user/password/${userID}`, passwordData)
    },
    // edit user password
    editUserProfile (userID, profileData) {
        return Api.patch(`/user/profile/${userID}`, profileData)
    }
}