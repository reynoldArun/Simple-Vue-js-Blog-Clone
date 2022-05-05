import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        slug: "Tandoori",
        title: "Tandoori",
        chef: "Chef Name",
        date: "Dec 17, 2019",
        PostTime: "2 min",
        ingredients: [
          "1 cup Couscous",
          "1/2 cup red quinoa",
          "1 cup peas",
          "1/2 cup green zucchini, chopped",
          "1/2 cup yellow zucchini, chopped",
          "1/2 red onion, chopped",
          "1 tsp salt",
          "1 tsp pepper",
          "1 tsp turmeric",
          "Olive oil",
          "Matzo meal",
          "Parsley",
          "1/2 cup cashews",
        ],
      },
      {
        slug: "Chicken-biryani",
        title: "Chicken Biryani",
        chef: "Chef Name",
        date: "Dec 17, 2019",
        PostTime: "2 min",
        ingredients: [
          "1 cup Couscous",
          "1/2 cup red quinoa",
          "1 cup peas",
          "1/2 cup green zucchini, chopped",
          "1/2 cup yellow zucchini, chopped",
          "1/2 red onion, chopped",
          "1 tsp salt",
          "1 tsp pepper",
          "1 tsp turmeric",
          "Olive oil",
          "Matzo meal",
          "Parsley",
          "1/2 cup cashews",
        ],
      },
    ],
  },
  mutations: {},
});
