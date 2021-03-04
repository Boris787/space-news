<template>
  <div>
    <header class="header">
      <img src="@/assets/blue-space.png" class="header__img">
      <h1 class="header__text">Search Your Space</h1>
      <div class="header__search-holder">
        <input type="search" class="header__search-box" placeholder="Search...">
      </div>
    </header>
    <section class="section">
      <div class="section__text">Results</div>
      <div class="section__flex-container">
        <div class="section__flex-box">
          <img src="@/assets/landscape.png" class="section__flex-img">
          <h1 class="section__flex-txt">This is Playstation 4/5 factory in space!</h1>
        </div>
        <div class="section__flex-box">
          <img src="@/assets/landscape.png" class="section__flex-img">
          <h1 class="section__flex-txt">This is Playstation 4/5 factory in space!</h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  // computed: {
  //     ...mapState({
  //         news: state => state.news
  //     })
  // }
}
</script>

<style lang="scss" scoped>
.header {
  height: 85vh;
  

  &__img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
  }

  &__text {
    font-size: 100px;
    font-weight: 900;
    position: absolute;
    left: 420px;
    bottom: 600px;
    color: blue;
  }

  &__search-box {
    flex: 1;
    min-width: 150px;
    padding-left: 40%;
    border: 0;
    border-bottom: 1px solid rgba(#000, .3);
    transition: border .2s ease;
    font-size: 30px;

    &:focus {
      outline: none;
      border-bottom-color: rgba(#000, 1);
    }
  }

  &__search-holder {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    height: 30px;
    width: 750px;
    background-color: #fff;
    border: 1px solid lighten(#000, 40%);
    border-radius: 30px;
    box-shadow: 0 0 50px rgba(#000, .3);
    left: 550px;
    bottom: 480px;
    position: absolute;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;

    &:hover {
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
  }
}
.section {
  height: 100vh;

  &__text {
    font-size: 70px;
    font-weight: 700;
    padding-top: 20px;
  }

  &__flex-container {
    display: flex;
    align-items: stretch;
    margin-top: 120px;
  }

  &__flex-box {
    background-color: darkblue;
    color: white;
    margin: 10px;
    text-align: center;
    line-height: 75px;
    font-size: 30px;
    flex-grow: 5;
    height: 600px;
    width: 50%;
  }

  &__flex-img {
    height: 400px;
    width: 400px;
    margin: 25px;
    float: left;
  }

  &__flex-txt {
    font-size: 30px;
    padding-top: 460px;
  }
}
</style>