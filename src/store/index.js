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
        const res = await axios({ url: 'http://hubblesite.org/api/v3/news', method: 'GET' });
        commit('SET_NEWS', res);
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
