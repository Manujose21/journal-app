<template>
  <Navbar/>

  <template v-if="isLoading">
    <div class=" d-flex justify-content-center " >
      <div class="mt-5 col-3  alert-info text-center">
        Espere por favor...
        <h3 class="mt-2">
          <i class="fa fa-spin fa-sync"></i>
        </h3>
        
      </div>
    </div>
    
  </template>

  <template v-else>
    <div class="d-flex">
      <div class="col-3">
        <EntryList />
      </div>
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
  </template>
  

</template>  

<script>
  import { defineAsyncComponent } from "vue"
  import { mapActions, mapState } from "vuex"
  export default{
    
    name: "DaybookLayout",
    
    components:{
      Navbar : defineAsyncComponent(() => import("../components/NavbarComponent.vue")),
      EntryList : defineAsyncComponent(() => import("../components/EntryList.vue")),

    },

    methods:{

      ...mapActions("daybook", ["loadEntries"])

    },
    created(){
      this.loadEntries()
    },

    computed: {
      ...mapState("daybook", ["isLoading"])
    }
  }
</script>