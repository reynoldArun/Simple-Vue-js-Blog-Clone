<template>
  <div class="home__image__container">
    <img src="@/assets/model2.jpg" alt="blog-model" class="home__model">
    <button class="home__button" @click="viewBlog">View Blog</button>
  </div>
  <div class="home__container">
      <div>
        <ul>
          <li>Jane Doe</li>
          <li>24 Jump Street</li>
          <li>Location</li>
          <li>M: 986754321</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Office Address</li>
          <li>21 Jump Street</li>
          <li>L: 54321</li>
        </ul>
      </div>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
  },
  methods: {
    viewBlog() {
      this.$router.push('/blog')
    }
  }
}
</script>

<style>
  .home__image__container {
    height: auto;
    width: auto;
    position: relative;
   
  }
  .home__model {
    height: 1300px;
    background-size: contain;
    width: 100%;
  
  }
  .home__container {
    display: flex;
    justify-content: space-around;
    height: fit-content;
    margin: 1rem 0rem;
  }
  
  .home__button {
    position: absolute;
    top: 25%;
    left: 5%;
    width: 120px;
    height: 50px;
    border: none;
    letter-spacing: 3px;
  }
</style>