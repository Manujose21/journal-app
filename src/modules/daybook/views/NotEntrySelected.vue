<template>
  <div class="d-flex justify-content-center align-items-center">
    <h1 class="">No hay nada seleccionado</h1>
  </div>

  <Fab />
</template>

<script>
  import { defineAsyncComponent } from 'vue'
  export default {
    
    components:{
      Fab : defineAsyncComponent(() => import("../components/FabButton.vue"))
    }
  }
</script>

<style lang="scss" scoped>
  
  div{
    height: calc(100vh - 120px);
  }
  h1{
    color: #bbbbbb;
    
  }
</style>