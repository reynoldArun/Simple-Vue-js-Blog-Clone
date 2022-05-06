import { createStore } from 'vuex'
import data from '../../data/db'

export default createStore({
  state: {
    recipes: data.recipes
  },
  mutations: {},
});
