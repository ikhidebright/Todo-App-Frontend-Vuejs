<template>
<div class="container">
  <div class="register">
    <h3>Join TIIDEdo</h3>
    <br/>
    <b-alert show variant="success" v-if="this.alert"><b>{{ alert }}</b> <br> <router-link to="/login" class="link2">Login to your Account now</router-link></b-alert>
    <b-form @submit="register">
    <b-form-input v-model="username" placeholder="Username"></b-form-input>
    <br>
    <b-form-input type="email" v-model="email" placeholder="Email"></b-form-input>
    <br>
    <b-form-input type="password" v-model="password" placeholder="Password"></b-form-input>
    <br>
    <b-form-input type="password" v-model="confirmpassword" placeholder="Confirm Password"></b-form-input>
    <br>
    <p :class="[this.username.length >= 5? 'ok' : 'no']">Username must be min of 5 letters</p>
    <p :class="[this.password !== this.confirmpassword || this.password === '' && this.confirmpassword === ''? 'no' : 'ok']">Passwords do not match</p>
    <p :class="[this.password.length >= 4? 'ok' : 'no']">Password must be min of 4</p>
    <b-button type="submit" variant="" class="sub" :disabled="this.password != this.confirmpassword || this.password == '' && this.confirmpassword == '' || this.username.length < 5 || this.password.length < 4">Register</b-button>
    <b-spinner v-if="this.clicked && !this.alert" style="width: 2rem; height: 2rem; color: #065566; float: right; margin-right: 6vmin" label="Small Spinner" type="grow"></b-spinner>
    </b-form>
    <br>
    Already have an account? <router-link to="/login" class="link">Get Started</router-link>
  </div>
   </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'register',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      confirmpassword: '',
      alert: '',
      show: 'hide',
      clicked: false
    }
  },
  methods: {
    register (e) {
      this.clicked = true
      setTimeout(() => {
        axios.post('https://todo-app-backend-node.herokuapp.com/register', {
          username: this.username,
          email: this.email,
          password: this.password
        }).then((response) => {
          this.alert = response.data.message
          this.$store.dispatch('setUser', response)
        })
      }, 10000)
      e.preventDefault()
    }
  }
}
</script>
<style scoped>
.errPassword {
  color: red;
  font-size: 0.8rem;
}

.sub {
  background-color: #065566;
  width: 40%;
}

.register {
  width: 95%;
  margin: 0 auto;
  margin-top: 6%;
}

h3 {
  font-family: Fredoka One;
  }

.no {
  color: red
}

.ok {
color: green
}

@media only screen and (min-width: 600px) {
  .register {
  width: 30%;
  margin: 0 auto;
  margin-top: 2%;
}
}
</style>
