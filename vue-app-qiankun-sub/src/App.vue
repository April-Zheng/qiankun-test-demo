<template>
  <div id="app">
    <!-- <img alt="Vue logo"
         src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <infinite-scroll-table />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import InfiniteScrollTable from './components/InfiniteScrollTable.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    InfiniteScrollTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
