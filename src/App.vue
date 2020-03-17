<template>
  <div id="app">
    <v-fade-transition mode="out-in">
    <router-view/>
     </v-fade-transition>
  </div>
</template>

<style lang="scss">
.link {
  color: #065566;
}

.link:hover {
  text-decoration: none;
  color: red
}

.link2 {
  color: #065566;
}

.moveInUp-enter-active {
  opacity: 0;
  transition: opacity 1s ease-in;
}

.link2:hover {
  text-decoration: none;
  color: #097992;
}

#app {
  color: rgb(22, 21, 21);
}

</style>
