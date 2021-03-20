<template>
  <div>
    <header class="header">
        <video autoplay loop muted class="header__video">
          <source src="@/assets/info.mp4" alt="video/mp4">
        </video>
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
            <img :src="`${item.urlToImage}`" alt="Article Image" class="section-news__boxes__content__box__img" width="auto" height="210px" v-if="item.urlToImage">
            <img :src="`${item.urlToImage}`" alt="Article Image" class="section-news__boxes__content__box__img" width="auto" height="210px" v-else>
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
              <h5 class="section-news__boxes__content__box__date" v-else>0000-00-00000:00:00+00:00</h5>
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
  &__video {
    top: 0;
    left: 0;
    width: 100%;
  }
  // Search  bar - minimize the code, use flat colors and styles
  &__search-holder  {
    padding-top: 20px;
    position: absolute;
    input {
      outline: none;
      border: 1px solid lighten(#000, 40%);
      border-radius: 30px;
      box-shadow: 0 0 50px rgba(#000, .3);
      padding: 10px;
      transition: all .2s ease-in-out;
      width: 180%;
      
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
            &__author {
              margin: 5px;
            }
              &__description {
                margin: 5px; 
              }
                &__date {
                  font-size: 12px;
                  margin-top: 50px;
                  float: left;
                }
      }
    }
  }
}
</style>