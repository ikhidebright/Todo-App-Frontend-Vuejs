<template>
  <div class="home">
    <div class="wave-container">
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
        <transition name="moveInUp"><b-nav-item to="/login" v-if="!$store.state.isUserLoggedIn" class="get">Get started</b-nav-item></transition>
      </b-navbar-nav>

        <b-nav-item-dropdown right v-if="$store.state.isUserLoggedIn">
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content v-if="$store.state.isUserLoggedIn">
            <em v-if="$store.state.isUserLoggedIn">{{ user }}</em>
          </template>
          <b-dropdown-item to="/dashboard" v-if="$store.state.isUserLoggedIn">Dashboard</b-dropdown-item>
          <b-dropdown-item to="/profile" v-if="$store.state.isUserLoggedIn">Edit Profile</b-dropdown-item>
          <b-dropdown-item to="/password" v-if="$store.state.isUserLoggedIn">Change Password</b-dropdown-item>
          <b-dropdown-item v-if="$store.state.isUserLoggedIn" @click="signout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</div>
<div class="container">
      <div class="hero">
      <h1>PLAN. DO. LIVE!</h1>
      <p>Plan everyday, follow tasks,
accomplish more daily</p>
</div>
</div>
  </div>
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290"><path fill="#065566" fill-opacity="1" d="M0,224L60,213.3C120,203,240,181,360,192C480,203,600,245,720,240C840,235,960,181,1080,154.7C1200,128,1320,128,1380,128L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
 <br>
    <b-container class="bv-example-row">
  <b-row>
    <b-col sm>
      <i class="fas fa-bell"></i>
      <h6>Get Notified</h6>
      <p>Notification alerts on task</p>
    </b-col>
    <b-col sm>
      <i class="fas fa-clipboard-list"></i>
      <h6>Make Plans</h6>
      <p>Plan daily, weekly and monthly</p>
    </b-col>
    <b-col sm>
      <i class="fas fa-clock"></i>
      <h6>Kill procrastination</h6>
      <p>Do neccessary task and
 live a happy live</p>
    </b-col>
  </b-row>
</b-container>
<br>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      user: this.$store.state.user[0].username
    }
  },
  methods: {
    signout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>
<style scoped>
h6 {
  font-family: Fredoka One;
}

p {
  font-size: 1rem;
  font-family: Noto Sans SC;
}

i {
  background-color: #065566;
  padding: 20px 0 0 22px;
  color: white;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  font-size: 4vmin;
  margin-bottom: 2vmin;
}

.moveInUp-enter-active {
  opacity: 0;
  transition: opacity 1s ease-in;
}

.bv-example-row {
  width: 75%;
  margin: 0 auto;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
}
/* .wave-container {
  position: relative;
  background: #09F;
  color: #FFF;
  overflow: hidden;
} */
/* h1 {
  font-size: 5rem;
  margin: 7rem 1.25rem 2.5rem 1.25rem;
}
p {
  font-size: 1.5rem;
  margin: 0 1.25rem 5rem 1.25rem;
} */

html {
  box-sizing: border-box;
}
*,*::before,*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
}
.wave-container {
  background: #065566;
}
.wave-container > svg {
  display: block;
}

.hero {
  width: 90%;
  margin: 0 auto;
  margin-top: -1%;
  position: relative;
  top: 7vmin;
  margin-bottom: -6vmin;
  color: white;
}

.hero h1 {
  font-size: 4rem;
  margin-top: 4min;
  font-family: Righteous;
}

.hero p {
  font-size: 1rem;
  font-family: Noto Sans SC;
}
</style>
