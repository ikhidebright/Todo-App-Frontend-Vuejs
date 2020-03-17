<template>
<div>
  <div class="home">
    <div id="nav">
       <div class="container">
      <div>
  <b-navbar toggleable="lg" type="dark" variant="">
    <b-navbar-brand to="/">TIIDEdo</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

        <b-navbar-nav>
        <b-nav-item to="login" v-if="!$store.state.isUserLoggedIn">Get started</b-nav-item>
      </b-navbar-nav>

        <b-nav-item-dropdown right v-if="$store.state.isUserLoggedIn">
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content v-if="$store.state.isUserLoggedIn">
            <em v-if="$store.state.isUserLoggedIn">{{ user }}</em>
          </template>
          <b-dropdown-item to="/dashboard" v-if="$store.state.isUserLoggedIn">Dashboard</b-dropdown-item>
          <b-dropdown-item to="/profile" v-if="$store.state.isUserLoggedIn">Edit Profile</b-dropdown-item>
          <b-dropdown-item to="/password" v-if="$store.state.isUserLoggedIn" disabled>Change Password</b-dropdown-item>
          <b-dropdown-item v-if="$store.state.isUserLoggedIn" @click="signout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</div>
    </div>
    </div>
<div class="container">
  <div class="register">
    <br/>
    <h3>Change Password</h3>
    <br/>
    <b-alert show variant="success" v-if="this.alert"><b>{{ alert }}</b></b-alert>
    <b-form @submit="update">
    <b-form-input type="text" v-model="password" placeholder="New Password"></b-form-input>
    <br>
    <b-form-input type="text" v-model="confirmpassword" placeholder="Confirm New Password"></b-form-input>
    <br>
    <b-button type="submit" variant="" class="sub">Confirm Changes</b-button>
    <b-spinner v-if="this.clicked && !this.alert" style="width: 2rem; height: 2rem; color: #065566; float: right; margin-right: 6vmin" label="Small Spinner" type="grow"></b-spinner>
    </b-form>
     </div>
   </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Password',
  data () {
    return {
      password: '',
      confirmpassword: '',
      alert: '',
      show: 'hide',
      user: this.$store.state.user.username,
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
    },
    update (e) {
      this.clicked = true
      setTimeout(() => {
        axios.post(`https://todo-app-backend-node.herokuapp.com/updatep/${this.$store.state.user.id}`, {
          username: this.username,
          email: this.email,
          password: this.password
        }).then((response) => {
          this.alert = response.data.message
        })
      }, 10000)
      e.preventDefault()
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
  height: 15vh;
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
