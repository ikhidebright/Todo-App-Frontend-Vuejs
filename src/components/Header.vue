<template>
<div>
  <div class="home">
    <div id="nav">
       <div class="container">
      <div>
  <b-navbar type="dark" variant="">
    <b-navbar-brand to="/">TIIDEdo</b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-navbar-nav>
        <b-nav-item to="login" v-if="!$store.state.isUserLoggedIn">Get started</b-nav-item>
      </b-navbar-nav>

        <b-nav-item-dropdown right v-if="$store.state.isUserLoggedIn">
          <template v-slot:button-content v-if="$store.state.isUserLoggedIn">
            <em v-if="$store.state.isUserLoggedIn">{{ user }}</em>
          </template>
          <b-dropdown-item to="/dashboard" v-if="$store.state.isUserLoggedIn">Dashboard</b-dropdown-item>
          <b-dropdown-item to="/profile" v-if="$store.state.isUserLoggedIn">Edit Profile</b-dropdown-item>
          <b-dropdown-item to="/password" v-if="$store.state.isUserLoggedIn">Change Password</b-dropdown-item>
          <b-dropdown-item v-if="$store.state.isUserLoggedIn" @click="signout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
  </b-navbar>
</div>
</div>
    </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      show: 'hide',
      user: this.$store.state.user[0].username,
      clicked: false
    }
  },
  methods: {
    changeRout () {
      this.$router.push('/')
    },
    signout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.changeRout()
    }
  }
}
</script>

<style scoped>
.sub {
  background-color: #065566;
  width: 60%;
}

.register {
  width: 80%;
  margin: 0 auto;
  margin-top: 6%;
}

#nav {
  background-color: #065566;
  height: auto;
  color: rgb(59, 43, 43);
  padding: 0%;
  margin-bottom: 1%;
}

h3 {
  font-family: Fredoka One;
  }

@media only screen and (min-width: 600px) {
  #nav {
  background-color: #065566;
  height: 9vh;
  color: white;
  width: 100%;
  padding: 0;
  position: fixed;
  top: 0;
  z-index: 1;
  margin-bottom: 2%;
}

  .register {
  width: 30%;
  margin: 0 auto;
  margin-top: 6%;
}

h3 {
  font-family: Fredoka One;
  }
}
</style>
