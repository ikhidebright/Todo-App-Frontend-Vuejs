<template>
  <div class="home">
    <Header />
<div class="container">
  <div class="register">
    <br/>
    <h3>Edit Profile</h3>
    <br/>
    <b-alert show><b>Fill only Areas that you want to change</b></b-alert>
    <b-alert show variant="success" v-if="this.alert"><b>{{ alert }}</b></b-alert>
    <b-form @submit="update">
    <b-form-input v-model="username" placeholder="New Username"></b-form-input>
    <br>
    <b-form-input type="email" v-model="email" placeholder="New Email"></b-form-input>
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
import Header from '@/components/Header'

export default {
  name: 'Profile',
  components: {
    Header
  },
  data () {
    return {
      username: this.$store.state.user[0].username,
      email: this.$store.state.user[0].email,
      password: this.$store.state.user[0].password,
      confirmpassword: '',
      alert: '',
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
    },
    update (e) {
      this.clicked = true
      setTimeout(() => {
        axios.post(`https://todo-app-backend-node.herokuapp.com/update/${this.$store.state.user[0].id}`, {
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

h3 {
  font-family: Fredoka One;
  }
  .register {
  width: 30%;
  margin: 0 auto;
  margin-top: 6%;
}
}
</style>
