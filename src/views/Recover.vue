<template>
  <div class="login">
    <h3>Account finder</h3>
    <br>
    <b-form @submit="www.facebook.com/register">
    <b-form-input v-model="text" placeholder="Enter Email"></b-form-input>
    <br>
    <b-button type="submit" variant="" class="sub">Find account</b-button>
    </b-form>
  </div>
</template>

<style scoped>
.sub {
  background-color: #065566;
  width: 40%;
}

h3 {
  font-family: Fredoka One;
  }

.login {
  width: 25%;
  margin: 0 auto;
  margin-top: 6%;
}
</style>
