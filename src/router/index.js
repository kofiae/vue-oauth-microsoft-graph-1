import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue';
import ConversationPage from '../pages/ConversationPage.vue'
import ConversationShowPage from '../pages/ConversationShowPage.vue'
import { userStore } from '@/main';

const routes = [
  { path: '/', component: HomePage },
  { path: '/conversations', component: ConversationPage },
  { path: '/conversations/:id', name: 'ConversationShowPage', component: ConversationShowPage, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/' && !userStore.state.user) {
    next('/')
  } else {
    next()
  }
})

export default router