import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import RecipeView from '../views/RecipeView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogView
  },
  {
    path: '/blog/:slug',
    name: 'Recipe',
    component: RecipeView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let documentTitle = `Food Blog | ${to.name}`
  if(to.params.slug) {
    documentTitle += ` ${to.params.slug}`
  }
  document.title = documentTitle
  next()
})

export default router
