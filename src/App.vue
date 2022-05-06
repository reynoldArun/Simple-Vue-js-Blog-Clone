<template>
  <div class="layout">
    <Header />
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
    </nav>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-size: 16px;
  font-family: "Quicksand", sans-serif;
}

.navbar {
  display: flex;
  font-size: 2rem;
  justify-content: space-around;
  align-content: center;
  margin-bottom: 20px;
}

.navbar > a {
  text-decoration: none;
  color: black;
  width: 250px;
  text-align: center;
  height: fit-content;
}

.layout {
  width: 60%;
  height: fit-content;
  margin: 0 auto;
}

.navbar > a.router-link-exact-active {
  border-top: 2px solid black;
}

li {
  list-style-type: none;
  cursor: pointer;
}

button {
  font-family: "Quicksand", sans-serif;
}
</style>
