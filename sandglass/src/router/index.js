import Vue from 'vue';
import VueRouter from "vue-router";
import Home from "../views/Home";
import Profile from "../views/Profile";
import Blog from "../views/Blog";
import Note from "../views/Note";

Vue.use(VueRouter);

const routes= [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/note',
    component: Note
  }
]

let router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;
