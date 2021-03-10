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
    // this.$store.dispatch('spaceNews'); // ??? Your function for dispatching news is getNews and should be called on NEWS page
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

h1, h2, h3, h4, h5 {
  margin: 0;
  padding: 0;
}
</style>
