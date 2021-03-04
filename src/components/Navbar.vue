<template>
  <div class="navbar" id="navigation">
    <div class="navbar__elements">
      <router-link class="navbar__elements__links" to="/">Home</router-link>
      <router-link class="navbar__elements__links" to="/news">News</router-link>
    </div>
  </div>
</template>

<script>
export default {
  created() { // Executes before DOM loads (client and server side)

  },
  mounted() { // Executes after DOM lodas (client side)

  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #fff;
  display: flex;
  width: 100%;
  position: relative;

  &__elements {
    display: flex;
    position: absolute;
    list-style: none;
    padding: 15px;
    margin: 0 20px 0 0;

    &__links {
      font-size: 45px;
      padding: 10px 30px;
      cursor: pointer;
      color: #fff;
      text-decoration: none;
      -webkit-transition-duration: 0.4s;
      transition-duration: 0.4s;

      &:hover {
        shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),0 17px 50px 0 rgba(0, 0, 0, 0.19);
        color: darkblue;
      }
    }
  }
}
</style>