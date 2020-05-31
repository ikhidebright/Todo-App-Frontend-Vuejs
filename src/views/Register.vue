<template>
<div class="container">
  <div class="register">
    <h3>Join TIIDEdo</h3>
    <br/>
    <b-form @submit.prevent="register">
    <b-form-input type="text" v-model="user.username" :state="checkusername" placeholder="Username" required></b-form-input>
    <b-form-invalid-feedback :state="checkusername">Username must be 5 characters long</b-form-invalid-feedback>
    <br>
    <b-form-input type="email" v-model="user.email" placeholder="Email" required></b-form-input>
    <br>
    <b-form-input type="password" id="password" :state="checkpassword" v-model="user.password" placeholder="Password" required></b-form-input>
    <b-form-invalid-feedback :state="checkpassword">Password must be 8 - 20 characters long</b-form-invalid-feedback>
    <br>
    <b-form-input type="password" v-model="confirmpassword" id="confirmpassword" :state="checkconfirmpassword" placeholder="Confirm Password" required></b-form-input>
    <b-form-invalid-feedback :state="checkconfirmpassword">Passwords do not match</b-form-invalid-feedback>
    <br>
    <b-button type="submit" variant="" class="sub" :disabled="!formvalid">Register</b-button>
    <b-spinner v-if="loading" style="width: 2rem; height: 2rem; color: #065566; float: right; margin-right: 6vmin" label="Small Spinner" type="grow"></b-spinner>
    </b-form>
    <br>
    Already have an account? <router-link to="/login" class="link">Login</router-link>
  </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions, mapState } from 'vuex'

export default {
  name: 'register',
  data () {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      confirmpassword: ''
    }
  },
  methods: {
    ...mapActions(['registerUser']),
    register () {
      this.registerUser(this.user)
    }
  },
  computed: {
    checkconfirmpassword () {
      return this.user.password == this.confirmpassword && this.user.password.length != ''
    },
     checkpassword () {
      return this.user.password.length > 7
    },
    checkusername () {
      return this.user.username.length === 5
    },
    formvalid () {
      return this.checkusername && this.checkpassword && this.checkconfirmpassword
    },
  ...mapState({
    loading: 'loading'
  })
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
  width: 90%;
  margin: 0 auto;
  margin-top: 6%;
  margin-top: 12vh;
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

/* @media only screen and (min-width: 600px) {
  .register {
  width: 30%;
  margin: 0 auto;
  margin-top: 2%;
}
} */
</style>
