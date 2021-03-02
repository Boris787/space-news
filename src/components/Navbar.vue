<template>
  <div class="navbar" id="navigation">
    <div class="navbar__elements">
      <router-link class="navbar__elements__link" to="/">Home</router-link>
      <router-link class="navbar__elements__link" to="/news">News</router-link>
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

  &__elements {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 20px 0 0;

    &__link {
      font-size: 35px;
      padding: 2px 10px;
      cursor: pointer;
      color: #000000;
      text-decoration: none;

      &:hover {
        color: #C2995E;
      }
    }
  }
}
</style>