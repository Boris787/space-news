<template>
  <div id="home">
    <header class="header">
      <img src="@/assets/mars-rover.png">
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
      <br />
      <button>Read More</button>
    </header>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
header {
  height: 100vh;

  img {
    width: 500px;
    height: 450px;
    float: left;
    margin: 10px;
  }

  span {
    position: absolute;
    margin-top: 100px;
    right: 200px;
    width: 350px;
    border: 3px solid #333;
    padding: 25px;
  }
  
  button {
    width: 100%;
    background-color: #C2995E;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;

    &:hover {
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
  }
}
</style>