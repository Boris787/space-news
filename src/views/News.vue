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
      <div class="section__boxes">
        <div class="section__content">1</div>
        <div class="section__content">2</div>
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
  }

  &__text {
    font-size: 100px;
    font-weight: 900;
    position: absolute;
    left: 420px;
    bottom: 600px;
    color: gray;
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

  &__boxes {
    display: flex;
    flex-wrap: wrap;
    left: 30px;
  } 

  &__content {
    background-color: #f1f1f1;
    width: 700px;
    height: 600px;
    margin-left: 170px;
    margin-top: 200px;
    text-align: center;
    line-height: 75px;
    font-size: 30px;
  }
  #scroll-trigger {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    font-size: 16px;
  }
}

</style>