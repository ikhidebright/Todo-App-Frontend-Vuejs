<template>
<div class="container">
  <div class="login">
    <h3>Login</h3>
    <br>
    <b-form @submit.prevent="login">
    <b-form-input type="email" v-model="user.email" placeholder="Email" required></b-form-input>
    <br>
    <b-form-input type="password" v-model="user.password" placeholder="Password" required></b-form-input>
    <b-link class="forgotpass link mb-4" to="/recover">Forgot password?</b-link>
    <br>
    <br>
    <b-button type="submit" variant="" class="sub">Login</b-button>
    <b-spinner v-if="loading" style="width: 2rem; height: 2rem; color: #065566; float: right; margin-right: 6vmin" label="Small Spinner" type="grow"></b-spinner>
    </b-form>
    <br>
   <!-- <h6>or</h6>
    <div class="google-btn" @click="google">
  <div class="google-icon-wrapper">
    <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
  </div>
  <p class="btn-text">Continue with google</p>
</div> -->
    Dont't have an account? <b-link to="/register" class="link">Register</b-link>
  </div>
   </div>
</template>

<script>
/* eslint-disable */
import { mapState, mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      user: {
      email: '',
      password: '',
      }
    }
  },
  methods: {
    ...mapActions(['loginUser']),
    login () {
    this.loginUser(this.user)
    }
  },
  computed: mapState({
    loading: 'loading'
  })
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
  width: 90%;
  margin: 0 auto;
  margin-top: 25vh;
}

/*@media only screen and (min-width: 600px) {
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
}*/
</style>
