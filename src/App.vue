<template>
  <div id="app">
   <Error />
    <router-view/>
  </div>
</template>

<script>
import Error from '@/components/Error.vue'
/* eslint-disable */

export default {
  name: 'App',
  components: {
    // Header,
    Error
  },
  //methods: {
//      async authUser () {
//     let isToken = this.$cookies.isKey("sp_tk")
//     if (!isToken) {
//       // not
//     } else {
//     let user = await axios.get("https://shopman-backend.herokuapp.com/authuser", {
//       headers: { Authorization: this.$cookies.get("sp_tk")},
//       })
//       this.$store.commit("setUser", user.data)
//     }
//   }
// },
//  created () {
//     this.authUser()
//     let items = JSON.parse(localStorage.getItem("cart"))
//     if (items != null) {
//     this.$store.commit("setCartReload", items)
//     } else {
//       // not
//     }
//   }
}
</script>

<style lang="scss">
.link {
  color: #065566;
}

.login h3 {
  font-family: Fredoka One;
  }

.link:hover {
  text-decoration: none;
  color: red
}

.link2 {
  color: #065566;
}

.moveInUp-enter-active {
  opacity: 0;
  transition: opacity 1s ease-in;
}

.link2:hover {
  text-decoration: none;
  color: #097992;
}

#app {
  color: rgb(22, 21, 21);
}

</style>
