import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue';
import ConversationPage from '../pages/ConversationPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/conversations', component: ConversationPage },
]

export default createRouter({
    history: createWebHistory(),
  routes,
})