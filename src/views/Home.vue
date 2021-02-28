<template>
  <div id="home">
    <header class="header">
      <img src="@/assets/mars-rover.png">
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
      <br />
      <button>Read More</button>
    </header>
    <section class="section"> 
      <h1>Space-news = Site description</h1>
      <span>Information about space in one click, and you know everything!</span>
      <br />
      <span>Space news are updating from moment to moment!</span>
    </section>
    <footer class="footer">
      <span>Copyright &copy; 2021 by Space News. All rights reserved.</span>
    </footer>
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
  //background-color: #999999;

  img {
    width: 500px;
    height: 450px;
    float: left;  
    margin-top: 10px;
    margin-left: 70px;
    border-radius: 5px;
  }

  span {
    position: absolute;
    margin-top: 100px;
    right: 200px;
    width: 350px;
    border: 3px solid #333;
    border-radius: 5px;
    padding: 25px;
  }
  
  button {
    width: 90%;
    background-color: #C2995E;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 100px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;

    &:hover {
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
  }
}

section {
  height: 60vh;
  //background-color: #999988;

  h1 {
    font-size: 30px;
    padding: 25px;
  }

  span {
    font-size: 35px;
  }
}

footer {
  height: 20vh;
  //background-color: #946518;
  
  span {
    font-size: 20px;
  }
}
</style>