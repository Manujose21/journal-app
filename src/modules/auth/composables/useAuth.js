import { computed } from 'vue'
import { useStore } from 'vuex'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const useAuth = () => {

  const store = useStore()
  const router = useRouter()

  const createUser = async ( user ) => {
    
    const { ok, message } = await store.dispatch('auth/createUser', user)
    if(!ok){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message,
      })
    }else{
      router.push({ name : 'not-entry' })
    }
  }

  const signInUser = async ( user ) => {

    const { ok } = await store.dispatch('auth/signIn', user)
    
    if(!ok){
      console.log('ha ocurrido un error')

    }else{
      router.push({ name : 'not-entry' })
    }

  }

  const checkAuthStatus = async() => {

    const resp = await store.dispatch('auth/checkAuthentication')
    return resp

  }

  return {
    createUser,
    signInUser,
    checkAuthStatus,

    status: computed(() => store.getters['auth/getStatus'])

   
  }

}

export default useAuth