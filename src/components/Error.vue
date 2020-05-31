<template>
  <div class="">
<b-container>
  <b-modal v-model="showSuccess" hide-backdrop hide-header-close hide-footer hide-header>
    <b-alert show fade variant="success" class="mb-n3 mt-n3 mr-n3 ml-n3">{{ successMessage }}</b-alert>
  </b-modal>
  <b-modal v-model="showError" hide-backdrop hide-header-close hide-footer hide-header>
    <b-alert show fade variant="danger" class="mb-n3 mt-n3 mr-n3 ml-n3">{{ errorMessage }}</b-alert>
  </b-modal>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState, mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions([
        'setSuccessAlert',
        'setErrorAlert'
      ])
    },
    watch: {
      showError () {
      setInterval(() => {
      this.setErrorAlert({
        message: null,
        status: false
      })
      }, 5000)
      },
      showSuccess () {
      setInterval(() => {
      this.setSuccessAlert({
        message: null,
        status: false
      })
      }, 5000)
      }
    },
    computed: 
      mapState({
        errorMessage: 'errorAlertMessage', 
        showError: 'showErrrorAlert', 
        successMessage: 'successAlertMessage', 
        showSuccess: 'showSuccessAlert'
      })
  }
</script>

<style scooped>
</style>