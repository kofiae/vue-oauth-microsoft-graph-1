import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue';
import ConversationPage from '../pages/ConversationPage.vue'
import { userStore } from '@/main';

const routes = [
  { path: '/', component: HomePage },
  { path: '/conversations', component: ConversationPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path === '/conversations' && !userStore.state.user) {
    next('/')
  } else {
    next()
  }
})

export default router