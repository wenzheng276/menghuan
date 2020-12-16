import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../pages/home')
const About = () => import('../components/about')

// import Home from '../pages/Home'
// import About from '../components/About'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      //redirect重定向：
      redirect: "/home",

    },
    {
      path: '/home',
      name: 'home',
      component: Home,

    }
    , {
      path: '/about',
      name: "about",
      component: About

    }



  ]
})
