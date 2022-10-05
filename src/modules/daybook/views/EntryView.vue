<template>
  <div class="entry-content-title  d-flex  justify-content-between  align-items-center  mt-2  mx-2">
    <div>
      <span class="fw-bold  mx-2">{{ date }}</span>
      
    </div>
    
    <div>
      <button v-if="id !== 'new'" @click="deleteEntries()" class="btn  btn-danger  text-white  mx-2">
        Borrar 
        <i class="fa fa-trash"></i>
      </button>
    </div>
  </div>
  <hr>
  <div class="entry-content  mt-2  mx-2">

    <textarea  
      cols="30"
      rows="10"
      placeholder="¿Que paso hoy?"
      v-model="entry.text"
    ></textarea>
    
  </div>
  

  
  <Fab icon="fa-save" @fab-button="fabAction" />
</template>

<script>
  import { defineAsyncComponent } from 'vue'
  import { mapGetters, mapActions } from 'vuex'
  import getDayMonthYear from '../helpers/getDayMonthYear'
  import { alertSucces, alertAction } from '@/helpers/sweetAlert'
  // import postImage from '@/modules/daybook/helpers/postImage'
  export default {
    name:'EntryView',
    props:{
      id:{
        type: String,
        required: true
      }
    },
   
    components:{
      Fab : defineAsyncComponent(() => import('../components/FabButton.vue'))
    },
    data(){
      return{
        entry : null,
        
      }
    },

    created(){
      this.loadEntries()
    },
    
    computed: {
      ...mapGetters("daybook",["getEntriesById", "getEntriesByTerm"]),

      date(){
        return getDayMonthYear(this.entry)
      }
      // entryById() {
      //   return 
      // }
    },
    
    methods: {
      ...mapActions("daybook", ["updateEntries", "createEntries", "deleteEntry"]),

      loadEntries(){

        if(this.id === 'new'){
          this.entry = {
            text : "",
            date : new Date().toDateString()
          }
        }else{
          const entry = this.getEntriesById(this.id)
          if(!entry) this.$router.push({ name: "not-entry" })
          this.entry = { ...entry }
        }
        
      },
      async fabAction(){
        if(this.entry.id){

          const date = new Date()
          const newEntry = {...this.entry}
          newEntry.date = date.toDateString()
          await this.updateEntries(newEntry)

          alertSucces('Actualizado correctamente','Su entrada se ha actualizado')

        }else{


         
          const entry = await alertAction('Crear entrada','Desea crear ésta nueva entrada?','Creada',
            () => this.createEntries(this.entry),)
              .then( res => res[0])
              .catch( () => 'new')

          
            
            this.$router.push({ name: 'entry-view', params:{ entry } })
        }

      },
      
      async deleteEntries(){
        
         const res = await alertAction('Eliminar entrada','Desea eliminar ésta entrada?', 'Eliminada', 
         () =>  this.deleteEntry(this.entry))

        if(res && res[1]) this.$router.push({ name: 'not-entry' })
      },
      fileImg( event ){
        const file = event.target.files[0]
        if( !file ){
          this.imageUrl = null
          this.file = null
          return
        }
        this.file = file
        const fr = new FileReader()
        fr.onload = () => this.imageUrl = fr.result
        fr.readAsDataURL( file )

      },

    },

    watch:{
      id(){
        this.loadEntries()
      }
    }

   
  }
</script>

<style lang="scss" scoped>
  .content-img{
    position: fixed;
    bottom: 20px;
    left: 26%;
    // width: 150px;
    max-height: 150px;
    padding: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, .2);
    img{
      width: 100%;
      max-height: 140px;
      object-fit: cover;
    }
  }
  textarea{
    border: none;
    outline: none;
    width: 100%;
  }
 .fa-times-circle{
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 30px;
 }

 
</style>