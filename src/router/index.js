import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Password from '../views/Password.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Recover from '../views/Recover.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (store.state.isUserLoggedIn === true) {
        next('/dashboard')
      } else {
        next()
      }
    }
  },
  {
    path: '/password',
    name: 'Change Password',
    component: Password,
    meta: {
      title: 'Change Password - TIIDEdo'
    },
    beforeEnter: async (to, from, next) => {
      if (store.state.isUserLoggedIn === false) {
        next({
          path: '/login',
          query: {
            redirectFrom: to.fullPath
          }
        })
      } else {
        next()
      }
    }
  },
  {
    path: '/recover',
    name: 'Find My Account',
    component: Recover
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'Edit Profile - TIIDEdo'
    },
    beforeEnter: async (to, from, next) => {
      if (store.state.isUserLoggedIn === false) {
        next({
          path: '/login',
          query: {
            redirectFrom: to.fullPath
          }
        })
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Join TIIDEdo'
    },
    beforeEnter: (to, from, next) => {
      if (store.state.isUserLoggedIn === true) {
        next('/dashboard')
      } else {
        next()
      }
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      title: 'Dashboard - TIIDEdo'
    },
    beforeEnter: async (to, from, next) => {
      if (store.state.isUserLoggedIn === false) {
        next({
          path: '/login',
          query: {
            redirectFrom: to.fullPath
          }
        })
      } else {
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Get Started - TIIDEdo'
    },
    beforeEnter: (to, from, next) => {
      if (store.state.isUserLoggedIn === true) {
        next('/dashboard')
      } else {
        next()
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
