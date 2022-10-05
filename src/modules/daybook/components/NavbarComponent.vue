<template>
  <nav class="navbar bg-primary">
    <a class="navbar-brand text-white" href="#">
      <img
        src="@/assets/logo.png"
        alt="logo"
        class="d-inline-block aling-text-top mx-3"
        height="24"
      >
      Daybook
    </a>

    <div class="d-flex">
      <button @click="logout" class="btn btn-outline-info mx-3">
        <i class="fa fa-sign-out-alt"></i>
      </button>
    </div>
  </nav>
</template>
<script>
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  export default{

    setup () {
      const store = useStore()
      const router = useRouter()

      const logout = () =>{
        store.commit('auth/logout')
        router.push({ name: 'login' })
      }

      return{
        logout
      }
    }

  }


</script>