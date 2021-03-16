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
          <input type="search" class="header__search-box" placeholder="Search..." v-model="query" @input="searchNews">
        </div>
      </div>
    </header>
    <section class="section-news">
      <div class="section-news__boxes">
        <div v-for="(item, i) in news" :key="i" class="section-news__boxes__content">
          <div class="section-news__boxes__content__box">
            <img :src="`${item.urlToImage}`" alt="image" class="section-news__boxes__content__box__img" width="auto" height="210px" v-if="item.urlToImage">
            <img :src="`${item.urlToImage}`" alt="no image" class="section-news__boxes__content__box__img" width="auto" height="210px" v-else>
            <div>
              <h1 class="section-news__boxes__content__box__author" v-if="item.author">{{ item.author }}</h1>
              <h1 class="section-news__boxes__content__box__author" v-else>read no-more</h1>
              <br />
              <h3 class="section-news__boxes__content__box__title" v-if="item.title">{{ item.title }}</h3> 
              <h3 class="section-news__boxes__content__box__title" v-else>read some</h3>
              <br />
              <span class="section-news__boxes__content__box__description" v-if="item.description">{{ item.description.substring(0, 60) }}...</span>
              <span class="section-news__boxes__content__box__description" v-else>Read More</span>
              <br />
              <h5 class="section-news__boxes__content__box__date" v-if="item.publishedAt">{{ item.publishedAt }}</h5>
              <h5 class="section-news__boxes__content__box__data" v-else>0000-00-00000:00:00+00:00</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      query: ''
    }
  },
  computed: {
    ...mapState({
      news: state => state.news.articles
    })
  },
  // watch: {
  //   news: {
  //     deep: true,
  //     immediate: true,
  //     handler(v, o) {
  //       if (v) {
  //         v.map(el => {
  //           if (el.description) {
  //             return el.description.substring(0, 2);
  //           }
  //         });
  //       }
  //     }
  //   }
  // },
  methods: {
    ...mapActions([
      'getNews'
    ]),
    async searchNews() {
      try {
        if (this.query) {
          this.getNews(this.query);
        } else {
          this.getNews('tesla');
        }
      } catch (err) {
        throw err;
      }
    }
  },
  async created() {
    await this.getNews('tesla');
  },
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
      font-family: 'Lato', Arial, sans-serif;
      position: relative;
      overflow: hidden;
      margin: 12.5px;
      min-width: 260px;
      max-width: 310px;
      width: 100%;
      background-color: #ffffff;
      color: #2B2B2B;
      text-align: center;
      font-size: 16px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 1);
      border-radius: 7px;
        &__box {
          display: flex;
          flex-direction: column;
          &__title {
            font-size: 15px;
          }
          div {
            padding: 20px;
          }
          //margin-top: 220px;
        // &__author {
        //   font-weight: 400;
        //   margin-top: 5px;
        //   text-transform: uppercase;
        //   color: #888;
        //   letter-spacing: 1px;
        //   font-size: 15px;
        // }
        // &__title {
        //   font-size: 15px;
        //   font-weight: 700;
        //   bottom: 10px;
        // }
        // &__description {
        //     font-family: 'Oswald';
        //     text-transform: uppercase;
        //     font-size: 20px;
        //     font-weight: 400;
        //     margin: 3px 0px;
        // }
        // &__date {
        //   border-top: 1px solid rgba(0, 0, 0, 0.15);
        //   padding: 0 20px;
        //   font-size: 13px;
        //   text-align: left;
        //   width: 100%;     
        // }
        // &__img {
        //   max-width: 100%;
        //   vertical-align: top;
        //   position: relative;
        // }
      }
    }
  }
}
</style>