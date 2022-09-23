<template>
  <div 
    class="mb-3 pointer" 
    @click="$router.push({ name: 'entry-view', params:{ entry: entry.id } })"
  >

    <div class="entry-container p-2">

      <div class="entry-title">
        <span class="fw-bold mx-1">{{ date }}</span>
      </div>

      <div class="entry-description mt-1">
        <p>{{ entryText }}</p>
      </div>

    </div>
  </div>
</template>

<script>
  import getDayMonthYear from '../helpers/getDayMonthYear.js'
 
  export default {
    props:{
        entry:{
          type : Object,
          reuired: true
        }
    },

    computed:{
      entryText(){
        const text = this.entry.text
        if( text.length > 130 ) return text.substring(0,130)+"..."
        return text
      },
      date(){
        return getDayMonthYear(this.entry)
      }
    }
    
  }
</script>

<style lang="scss" scoped>
  .entry-container{
      border-bottom: 1px solid #ccc;
      transition: background-color 0.3s;
      &:hover{
        background-color: lighten( $color:grey, $amount: 45%);
      }
      .entry-description{
        font-size: 12px;
      }
  }
</style>