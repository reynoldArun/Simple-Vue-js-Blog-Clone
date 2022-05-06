<template>
  <div class="recipe__container">
    <h1 class="recipe__title">{{recipe.title}}</h1>
    <h3 class="recipe__h3">{{recipe.description}}</h3>
    <p>Rating - <span>{{recipe.ratings}}</span> | Reviews - <span>{{recipe.reviews}}</span></p>
    <img :src="recipe.img" alt="blog-recipe" class="recipe__img">
    <h2>Ingredients</h2>
    <ul v-for="single in recipe.ingredients" :key="single">
      <li>{{single}}</li>
    </ul>
    <h2>Directions</h2>
    <ul v-for="dir in recipe.Directions" :key="dir">
      <li>{{dir}}</li>
    </ul>
  </div>
  <hr>
</template>

<script>
export default {
  computed: {
    recipe() {
      return this.$store.state.recipes.find(recipe => recipe.slug === this.$route.params.slug)
    }
  }
}
</script>

<style>
 .recipe__container {
    text-align: center;
  }
  .recipe__img {
    width: 100%;
    height: 800px;
  }

  .recipe__title {
    margin: 10px;
    letter-spacing: 3px;
    text-decoration: underline;
  }

  .recipe__h3 {
    margin: 20px;
    line-height: 2rem;
  }

  .recipe__container > p {
    font-weight: 900;
  }

  .recipe__container > p > span {
    color: red;
  }

  .recipe__container > h2 {
    text-decoration: underline;
    text-transform: uppercase;
    margin: 25px 0px;
    text-align: left;
    letter-spacing: 2px;
  }

  .recipe__container > ul {
    text-align: left;
  }
 
</style>