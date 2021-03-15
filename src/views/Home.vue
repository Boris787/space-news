<template>
  <div id="home">
    <header class="header">
        <div class="header__content">
          <h1 class="header__center">Space News</h1>
          <h3 class="header__under">Best News From Space Every Second</h3>
        </div>
        <button class="header__btn" onclick="location.href='https://www.spacex.com/';">Read More</button>
    </header> 
    <section class="section">
      <h1 class="section__main-text">Description of News</h1>
      <h3 class="section__second-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
        <br />
      <h1 class="section__main-text">Description of Site</h1>
      <h5 class="section__second-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
        <br />
      <h1 class="section__main-text">About our company</h1>
      <h5 class="section__second-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h5>
    </section>
    <footer class="footer">
      <h1 class="footer__copy-text">Copyright &copy; by Space News. All Rights Reserved.</h1>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>

.header {
  height: 100vh;
  position: relative;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, .4)), url(../assets/spacex.png);
  background-position: center;
  background-size: cover;

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    color: #fff;
    h1 {
      padding-bottom: 15px;
    }
  }

  &__image {
    height: 100%;
    width: 100%;
  }

  &__btn {
    background: linear-gradient(to right, black 25%, darkblue 75%);
    border: none;
    color: #fff;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    width: 90%;
    position: absolute;
    top: 90%;
    left: 5%;
    border-radius: 7px;

    &:hover {
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
  }
}
.section {
  min-height: 100vh;

  &__main-text {
    font-size: 35px;
    padding-top: 25px;
  }

  &__second-text {
    font-size: 20px;
    padding: 50px;
  }
}
.footer {
  min-height: 15vh;

  &__copy-text {
    font-size: 20px;
    padding-top: 50px;
  }
}
</style>