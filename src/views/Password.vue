<template>
<div class="home">
<Header />
<div class="container">
  <div class="register">
    <br/>
    <h3>Change Password</h3>
    <br/>
    <b-form @submit.prevent="update">
    <b-form-input type="password" v-model="user.cpassword" placeholder="Current Password" required></b-form-input>
    <br>
    <b-form-input type="password" v-model="user.npassword" :state="npassword" placeholder="New Password" required></b-form-input>
    <b-form-invalid-feedback :state="npassword">Password must be 8 - 20 characters long</b-form-invalid-feedback>
    <br>
    <b-form-input type="password" v-model="confirmpassword" :state="checkconfirmpassword" placeholder="Confirm New Password" required></b-form-input>
    <b-form-invalid-feedback :state="checkconfirmpassword">Passwords do not match</b-form-invalid-feedback>
    <br>
    <b-button type="submit" variant="" class="sub" :disabled="!formvalid">Submit</b-button>
    <!--<b-spinner v-if="this.clicked && !this.alert" style="width: 2rem; height: 2rem; color: #065566; float: right; margin-right: 6vmin" label="Small Spinner" type="grow"></b-spinner>-->
    </b-form>
     </div>
   </div>
</div>
</template>

<script>
/* eslint-disable */
import Header from '@/components/Header'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Password',
  components: {
    Header
  },
  data () {
    return {
      user: {
      cpassword: '',
      npassword: ''
      },
      confirmpassword: ''
    }
  },
  methods: {
    ...mapActions(['editUserPassword']),
    update () {
      this.editUserPassword({
        userID: this.$store.state.user[0].id,
        passwordData: {
          currentPassword: this.user.cpassword,
          newPassword: this.user.npassword
        }
      })
    }
  },
  computed: {
    ...mapState({
    user: 'user'
  }),
   npassword () {
      return this.user.npassword.length > 7
    },
     checkconfirmpassword () {
      return this.user.npassword == this.confirmpassword && this.user.npassword.length != ''
    },
    formvalid () {
      return this.checkconfirmpassword && this.npassword
    },
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

/*@media only screen and (min-width: 600px) {
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
}*/
</style>
