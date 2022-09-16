<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <button @click="goToDaybook()" class="btn btn-primary">primary</button>
      <button @click="goToDaybook()" class="btn btn-success">succes</button>
      <button @click="goToDaybook()" class="btn btn-secondary">secondary</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  methods: {
    goToDaybook(){
      this.$router.push({ name: "not-entry" })
    }
  },
}
</script>
