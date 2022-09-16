<template>
  <div 
    class="mb-3 pointer" 
    @click="$router.push({ name: 'entry-view', params:{ entry: 10 } })"
  >

    <div class="entry-container p-2">

      <div class="entry-title">
        <span class="fw-bold text-success mx-1">15</span>
        <span class="fw-bold mx-1">Septiembre</span>
        <span class="mx-1">2022, jueves</span>
      </div>

      <div class="entry-description mt-1">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio eligendi, odit aspernatur aut recusandae autem dolor quidem accusamus facilis totam magni eum voluptatibus voluptas cumque. Nesciunt suscipit natus quod tempora!</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    
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