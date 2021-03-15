import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    news: []
  },
  actions: {
    async getNews ({ commit }) {
      try {
        const res = await axios({ url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=6f211c19eb5146229fa1f42b2e36104e', method: 'GET', });
        commit('SET_NEWS', res.data);
      } catch(err) {
        throw err;
      }
    }
  },  
  mutations: {
    SET_NEWS(state, payload) {
      state.news = payload;
    }
  },
  modules: {
  }
})
