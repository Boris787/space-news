<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import Navbar from './components/Navbar.vue';
import Home from '@/views/Home.vue';

export default {
  components: {
    Navbar,
    Home
  },
  mounted() {
    this.$store.dispatch('spaceNews');
  },
  computed: {
    ...mapState([
      'news'
    ])
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
