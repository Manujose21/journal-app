<template>
  <div class="entry-content-title  d-flex  justify-content-between  align-items-center  mt-2  mx-2">
    <div>
      <span class="text-success  fw-bold  mx-2">15</span>
      <span class="fw-bold mx-2">Septiembre</span>
      <span class="mx-2">2022, jueves</span>
    </div>
    
    <div>
      <button class="btn  btn-danger  text-white  mx-2">
        Borrar 
        <i class="fa fa-trash"></i>
      </button>

      <button class="btn  btn-primary  text-white">
        Subir Foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr>
  <div class="entry-content  mt-2  mx-2">

    <textarea  
      cols="30"
      rows="10"
      placeholder="¿Que paso hoy?"
    ></textarea>

  </div>
  <div class="content-img">
    <img src="https://images.unsplash.com/photo-1663163541223-2227c0bb696a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="">
  </div>
  
  <Fab icon="fa-save"/>
</template>

<script>
  import { defineAsyncComponent } from 'vue'
  export default {
   
    components:{
      Fab : defineAsyncComponent(() => import('../components/FabButton.vue'))
    }
  }
</script>

<style lang="scss" scoped>
  .content-img{
    position: fixed;
    bottom: 90px;
    right: 20px;
    width: 150px;
    padding: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, .2);
    img{
      width: 100%;
    }
  }
  textarea{
    border: none;
    outline: none;
    width: 100%;
  }
</style>