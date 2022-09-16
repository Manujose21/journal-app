<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
      type="text"
      class="form-control"
      placeholder="Buscar"
      > 
    </div>
   
    <div class="entry-list mt-2">
    <Entry 
      v-for="item in 10"
      :key="item"
    />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

  export default {
    components:{
      Entry: defineAsyncComponent(() => import("./EntryComponent.vue"))
    }
  }
</script>

<style scoped>
  .entry-list-container{
    /* padding: 1rem; */
    border-right: 1px solid #a3a1a1;
    height: calc( 100vh - 56px );
  }
  .entry-list{
    height: calc( 100vh - 120px );
    overflow-y: auto;
  }
</style>