<template>
  <h1>{{ status }}</h1>
  <router-view/>
</template>

<script>
  import useAuth  from '@/modules/auth/composables/useAuth'
  export default{

    setup() {

      

      const { checkAuthStatus, status } = useAuth()

      checkAuthStatus()

      return {
        status

      }

    }
  }
</script>

<style>

</style>
