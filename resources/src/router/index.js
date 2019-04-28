import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import CreateTask from "../components/CreateTask";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/add',
      name: 'CreateTask',
      component: CreateTask,
    },
  ],
});
