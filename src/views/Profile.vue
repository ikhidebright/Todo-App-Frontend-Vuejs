<template>
  <div class="home">
    <Header />
<div class="container">
  <div class="register">
    <br/>
    <h3>Edit Account Details</h3>
    <br/>
    <b-form @submit.prevent="update">
    <b-form-input v-model="user.username" :state="checkusername" placeholder="New Username" required></b-form-input>
    <b-form-invalid-feedback :state="checkusername">Username must be 5 characters long</b-form-invalid-feedback>
    <br>
    <b-form-input type="email" v-model="user.email" placeholder="New Email" required></b-form-input>
    <br>
    <b-form-input type="password" v-model="user.currentPassword" placeholder="Current Password" required></b-form-input>
    <br>
    <b-button type="submit" variant="" class="sub" :disabled="!formvalid">Confirm Changes</b-button>
    <b-spinner v-if="this.clicked && !this.alert" style="width: 2rem; height: 2rem; color: #065566; float: right; margin-right: 6vmin" label="Small Spinner" type="grow"></b-spinner>
    </b-form>
     </div>
   </div>
</div>
</template>

<script>
/* eslint-disable */
import Header from '@/components/Header'
import { mapActions } from 'vuex'

export default {
  name: 'Profile',
  components: {
    Header
  },
  data () {
    return {
      user: {
      username: this.$store.state.user[0].username,
      email: this.$store.state.user[0].email,
      currentPassword: ''
      }
    }
  },
  methods: {
    ...mapActions(['editUserProfile']),
    update () {
      this.editUserProfile({
        userID: this.$store.state.user[0].id,
        profileData: this.user
      })
    }
  },
  computed: {
     checkusername () {
      return this.user.username.length === 5
    },
    formvalid () {
      return this.checkusername && this.user.currentPassword.length > 7 && !this.user.email == ''
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

h3 {
  font-family: Fredoka One;
  }
  .register {
  width: 30%;
  margin: 0 auto;
  margin-top: 6%;
}
}*/
</style>
