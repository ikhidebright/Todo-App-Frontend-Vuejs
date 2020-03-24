<template>
<div class="container">
  <div class="login">
    <h3>Login</h3>
    <br>
    <b-alert show variant="success" v-if="this.alert"><b>{{ alert }}</b></b-alert>
    <b-form @submit="login">
    <b-form-input type="email" v-model="email" placeholder="Email"></b-form-input>
    <br>
    <b-form-input type="password" v-model="password" placeholder="Password"></b-form-input>
    <br>
    <b-button type="submit" variant="" class="sub">Login</b-button> <b-link class="forgotpass link" to="/recover">Forgot password?</b-link>
    </b-form>
    <br>
    <h6>or</h6>
    <div class="google-btn" @click="google">
  <div class="google-icon-wrapper">
    <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
  </div>
  <p class="btn-text">Continue with google</p>
</div>
    <br>
    Dont't have an account yet? <b-link to="/register" class="link">Create an account</b-link>
  </div>
   </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      alert: null
    }
  },
  beforeRouteEnter (to, from, next) {
    if (to.query.redirectFrom) {
      next(vm => {
        vm.alert =
          'Sorry, you have to login first!'
      })
    } else {
      next()
    }
  },
  methods: {
    login (e) {
      axios.post('https://todo-app-backend-node.herokuapp.com/login', {
        email: this.email,
        password: this.password
      }).then((res) => {
        this.$store.dispatch('setToken', res.data.token)
        this.$store.dispatch('setUser', res.data.results)
        this.alert = res.data.message
      })
        .then((res) => {
          this.$router.push('/dashboard')
        })
      e.preventDefault()
    },
    google () {
    }
  }
}
</script>
<style lang="scss" scoped>$white: #fff;
$google-blue: #4285f4;
$button-active-blue: #1669F2;
.google-btn {
  width: 100%;
  height: 42px;
  // background-color: $google-blue;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
  margin: 0 auto;
  .google-icon-wrapper {
    position: absolute;
    margin-top: 1px;
    margin-left: 1px;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    background-color: $white;
  }
  .google-icon {
    cursor: pointer;
    position: absolute;
    margin-top: 11px;
    margin-left: 11px;
    width: 18px;
    height: 18px;
  }

  .login h3 {
  font-family: Fredoka One;
  }

  h3 {
  font-family: Fredoka One;
  }

.moveInUp-enter-active {
  opacity: 0;
  transition: opacity 1s ease-in;
}
  .btn-text {
    cursor: pointer;
   text-align: center;
  padding-top: 10px;
    margin: 11px 11px 0 0;
    color: red;
    font-size: 14px;
    letter-spacing: 0.2px;
    font-family: "Roboto";
  }
  &:hover {
    box-shadow: 0 0 6px red;
  }
  &:active {
    background: rgba(255, 0, 0, 0.1);
  }
}
@import url(https://fonts.googleapis.com/css?family=Roboto:500);
</style>

<style scoped>
h6 {
  text-align: center;
  width: 100%;
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(238, 238, 238);
}

p {
  font-size: 1rem;
  font-family: Noto Sans SC;
}

.sub {
  background-color: #065566;
  width: 40%;
}

.forgotpass {
float: right;
}

.login {
  width: 80%;
  margin: 0 auto;
  margin-top: 6%;
}

@media only screen and (min-width: 600px) {
  .login {
  width: 30%;
  margin: 0 auto;
  margin-top: 6%;
}

.login h3 {
  font-family: Fredoka One;
  }

p {
  font-size: 1rem;
  font-family: Noto Sans SC;
}

.login h3 {
  font-family: Fredoka One;
  }
}
</style>
