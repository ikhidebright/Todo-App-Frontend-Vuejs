<template>
  <div class="home">
    <div class="wave-container">
<div class="container">
      <div class="hero">
      <h1>PLAN. DO. LIVE!</h1>
      <p>Plan everyday, follow tasks,
accomplish more daily</p>
</div>
</div>
  </div>
 <br>
    <b-container class="bv-example-row">
 <!-- <b-row>
    <b-col sm class='mb-4 mt-4'>
      <i class="fas fa-bell"></i>
      <h6>Get Notified</h6>
      <p>Notification alerts on task</p>
    </b-col>
   <b-col sm class='mb-4'>
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
 </b-row>-->
</b-container>
<br>
<b-container fluid>
<div class="fixed-bottom actions mb-3">
   <button type="submit" block class="proceedToCheck1 mb-2" @click="login">LOGIN</button>
   <button type="submit"  class="proceedToCheck" @click="register">GET STARTED</button>
   </div>
   </b-container>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'Home',
  components: {
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    register () {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
.home {
  background-color: #065566;
  min-height: 100vh;
  max-height: auto
}

.actions {
  width: 95%;
  margin: 0 auto;
}

.proceedToCheck {
    min-width: 100%;
    font-size: 1.1em;
    font-weight: 400;
    padding: 8px 16px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.15);
    text-transform: uppercase;
    background: #1e6675;
    border: 1px solid #1e6675;
    cursor: pointer;
    display: inline-block;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-style: normal;
    line-height: 1.42857;
    box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    direction: ltr;
    border-radius: 0px!important;
    position: relative;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
    color: white
  }

.proceedToCheck:hover {
    min-width: 100%;
    font-size: 1.1em;
    font-weight: 400;
    padding: 8px 16px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.15);
    text-transform: uppercase;
    background: #377684;
    border: 1px solid #377684; 
    cursor: pointer;
    display: inline-block;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-style: normal;
    line-height: 1.42857;
    box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    direction: ltr;
    border-radius: 0px!important;
    position: relative;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
  }


  .proceedToCheck1 {
    min-width: 100%;
    font-size: 1.1em;
    font-weight: 400;
    padding: 8px 16px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.15);
    text-transform: uppercase;
    background: #fff;
    border: 1px solid #fff;
    cursor: pointer;
    display: inline-block;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-style: normal;
    line-height: 1.42857;
    box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    direction: ltr;
    border-radius: 0px!important;
    position: relative;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
    color: #032a33
  }

.proceedToCheck1:hover {
    min-width: 100%;
    font-size: 1.1em;
    font-weight: 400;
    padding: 8px 16px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.15);
    text-transform: uppercase;
    background: #e6eeef;
    border: 1px solid #e6eeef;
    cursor: pointer;
    display: inline-block;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-style: normal;
    line-height: 1.42857;
    box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    direction: ltr;
    border-radius: 0px!important;
    position: relative;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
  }

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
  font-size: 1.5rem;
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
  background-color: #065566;
}

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
  font-size: 2rem;
  margin-top: 4min;
  font-family: Righteous;
}

h2 {
  font-size: 1.5rem;
  font-family: Righteous;
}

.hero p {
  font-size: 1rem;
  font-family: Noto Sans SC;
}
</style>
