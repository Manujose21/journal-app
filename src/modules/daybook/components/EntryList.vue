<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
      type="text"
      class="form-control"
      placeholder="Buscar"
      v-model="term"
      > 
    </div>

    <div class="d-flex justify-content-center mt-2">
      <button class="btn btn-primary" @click="$router.push({name: 'entry-view', params:{ entry: 'new' } })">
        Nueva entrada <i class="fa fa-plus-circle"></i>
      </button>
    </div>
    
    <div class="entry-list mt-2">
    <Entry 
      v-for="entry in entriesByTerm
      "
      :key="entry.id"
      :entry="entry"
    />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters } from "vuex"

export default {
  components:{
    Entry: defineAsyncComponent(() => import("./EntryComponent.vue"))
  },

  data(){
    return{
      term : ""
    }
  },
  computed:{
    
    ...mapGetters("daybook",["getEntriesByTerm", "getEntriesById"]),

    entriesByTerm(){

      return this.getEntriesByTerm( this.term )

    }
  
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
    height: calc( 100vh - 160px );
    overflow-y: auto;
  }
</style>