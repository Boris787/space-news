<template>
  <div class="navbar" id="navigation">
    <ul>
      <li>Home</li>
      <li>News</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #fff;
  display: flex;
  width: 100%;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 20px 0 0;

    li {
      font-size: 35px;
      padding: 2px 10px;
      cursor: pointer;
      color: #000000;

      &:hover {
        color: #C2995E;
      }
    }
  }
}
</style>