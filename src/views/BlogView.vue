<template>
 <div class="blog__container">
   <ul class="blog__list">
     <li>All Posts</li>
     <li>Veg</li>
     <li>Non Veg</li>
     <li>Breakfast</li>
     <li>Salads/Salate</li>
     <li>More</li>
     <input type="text">
     <button class="blog__button">Log in / Sign up</button>
   </ul>
   <div class="wrapper">
        <div class="content" v-for="recipe in $store.state.recipes" :key="recipe.slug">
      <div class="blog__parent" @click="gotorecipe(recipe.slug)">
       <img :src="recipe.img" alt="blog-recipe">
      <div class="blog__child">
        <div class="blog__top">
          <p>{{recipe.writer}}</p>
          <p>{{recipe.ratings}} {{recipe.reviwes}}</p>
        </div>
        <div class="blog__bottom">
          <h2>{{recipe.title}}</h2>
          <hr>
          <p>comments</p>
        </div>
     </div>
    </div>
    </div>
    </div>
   </div>
</template>

<script>
export default {
  methods: {
    gotorecipe(slug) {
      this.$router.push(`/blog/${slug}`)
    },
  },    
}
</script>

<style>
  .blog__container {
   margin-top: 20px;
   height: fit-content;
  }

  .blog__list {
    display: flex;
    justify-content: space-around;
    font-size: 1rem;
    align-items: center;
  }

  .blog__button {
    height: 30px;
  }

  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding: 20px;

  }

  .blog__parent {
     position: relative;
     height: 500px;
     width: 100%;
     color: white;
     margin: 20px 0px;
  }

  .blog__parent > img {
    width: 100%;
    height: 100%;
    opacity: 0.9;
  }

  .blog__child {
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 0;
    font-weight: bold;
   
  }

  .blog__child > img {
    width: 100%;
    height: 100%;
  }

  .blog__bottom > h2 {
    margin-bottom: 4px;
    letter-spacing: 2px;
  }

  .blog__bottom > h2:hover {
    color: red;
  }  


  .blog__bottom > p {
    margin-top: 4px;
  }
</style>