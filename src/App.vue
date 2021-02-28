<template>
  <div id="app">
    <Navbar />
    <Home />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Home from '@/views/Home.vue';

export default {
  components: {
    Navbar,
    Home
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
