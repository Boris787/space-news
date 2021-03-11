<template>
  <!-- <div>
    <header class="header"> -->
      <!-- <img src="@/assets/blue-space.png" class="header__img"> --> <!-- Background image, not <img> -->
      <!-- <h1 class="header__text">Search Your Space</h1>
      <div class="header__search-holder">
        <input type="search" class="header__search-box" placeholder="Search...">
      </div>
    </header>
    <section class="section">
      <div class="section__boxes">
        <div v-for="(item, i) in news" :key="i" class="section__content">1</div>
        <div class="section__content">2</div>
      </div>
    </section>
  </div> -->
  <div>
    <header class="header">
      <div class="header__wrap">
        <h1 class="header__text">Search Your Space</h1>
        <div class="header__search-holder">
          <input type="search" class="header__search-box" placeholder="Search...">
        </div>
      </div>
    </header>
    <section class="section-news">
      <div class="section-news__boxes">
        <div v-for="(item, i) in news.data.articles" :key="i" class="section-news__boxes__content">
          <div class="section-news__boxes__content__box">
            <h1 class="section-news__boxes__content__box__author">{{ item.author }}</h1>
            <br />
            <h3 class="section-news__boxes__content__box__title">{{ item.title }}</h3> 
            <!--<br />
            <span class="section-news__boxes__content__box__description">{{ item.description }}</span> -->
            <br />
            <h5 class="section-news__boxes__content__box__date">{{ item.publishedAt }}</h5>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      news: state => state.news
    })
  },
  methods: {
    ...mapActions([
      'getNews'
    ])
  },
  async created() {
    await this.getNews();
  }
}
</script>

<style lang="scss" scoped>
.header {
  min-height: 85vh;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, .4)), url(../assets/blue-space.png);
  background-position: center;
  background-size: cover;
  position: relative;
  // Content wrapper - center to the screen
  &__wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  // Text - use small font size, white color
  &__text {
    font-size: 40px;
    font-weight: 500;
    color: #fff;
  }
  // Search  bar - minimize the code, use flat colors and styles
  &__search-holder  {
    padding-top: 20px;
    input {
      outline: none;
      border: 1px solid lighten(#000, 40%);
      border-radius: 30px;
      box-shadow: 0 0 50px rgba(#000, .3);
      padding: 10px;
      transition: all .2s ease-in-out;
      width: 100%;
      &:hover {
        box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),0 17px 50px 0 rgba(0, 0, 0, 0.19);
      }
    }
  }
}

// Section news
.section-news {
  padding: 15px;
  padding-left: 125px;
  &__boxes {
    display: flex;
    flex-wrap: wrap;
    &__content {
      background-color: #fff;
      border: 1px solid rgb(212, 212, 212);
      border-radius: 5px;
      padding: 15px;
      margin: 15px;
      height: 350px;
      width: 350px;
        &__box {
          margin-top: 220px;
    
        &__author {
          font-size: 20px;
          font-weight: 500;
          border-top: 1px solid #030F06;
        }
        &__title {
          font-size: 15px;
          font-weight: 700;
        }
        // &__description {
        //   font-size: 15px;
        //   font-weight: 600;
        // }
        &__date {
          font-size: 10px;
          font-weight: 700;
          float: left;      
        }
      }
    }
  }
}

/* .header {
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
} */
/* .section {
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
} */

</style>