<template>
  <div id="home">
    <header class="header">
        <div class="header__content">
          <h1 class="header__center">Space News</h1>
          <h3 class="header__under">Best News From Space Every Second</h3>
        </div>
        <button class="header__btn">Read More</button>
        <video autoplay loop muted class="header__video">
          <source src="@/assets/space.mp4" alt="video/mp4">
        </video>
    </header> 
    <section class="section">
      <h1 class="section__main-text">Description of News</h1>
      <h3 class="section__second-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>
        <br />
      <h1 class="section__main-text">Description of Site</h1>
      <h5 class="section__second-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h5>
        <br />
      <h1 class="section__main-text">About our company</h1>
      <h5 class="section__second-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h5>
    </section>
    <section class="section-image">
      <h1>Rocket of spaceX</h1>
      <button class="section-image__button">Spacex</button>
    </section>
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
  // background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, .4)), url(../assets/spacex.png);
  // background-position: center;
  // background-size: cover;

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
  &__btn {
    background: linear-gradient(to right, rgba(25, 65, 178, .5), rgba(40, 80, 255, .10));
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
    width: 35%;
    position: absolute;
    top: 80%;
    left: 32%;
    border-radius: 50px;

    &:hover {
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
  }
  &__video {
    top: 0;
    left: 0;
    width: 100%;
  }
}
.section {
  min-height: 100vh;

  &__main-text {
    font-size: 35px;
    padding-top: 100px;
  }

  &__second-text {
    font-size: 20px;
    padding: 40px;
  }
}
.section-image {
  min-height: 50vh;
  margin: 15px 0;
  position: relative;

  background-image: linear-gradient(to right bottom, rgba(0, 0, 0, .0), rgba(0, 0, 0, .20)), url(../assets/rocket.png);
  background-position: center;
    h1 {
      font-size: 60px;
      font-weight: 500;
      color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &__button {
      background: linear-gradient(to right bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .20));
      border: none;
      color: #fff;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 4px 3px;
      cursor: pointer;
      -webkit-transition-duration: 0.4s;
      transition-duration: 0.4s;
      width: 20%;
      position: absolute;
      top: 80%;
      left: 40%;
      border-radius: 50px;

      &:hover {
        box-shadow: 0 15px 20px 0 rgba(240, 240, 240, 0.30),0 20px 54px 0 rgba(240, 240, 240, 0.15);
      }
    }
}
</style>