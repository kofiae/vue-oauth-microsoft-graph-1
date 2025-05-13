import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHouse, faUser, faComment, faCircleNotch, faCheck } from '@fortawesome/free-solid-svg-icons'

/* import the router */
import router from './router'

/* add icons to the library */
library.add(faUser, faHouse, faComment, faCircleNotch, faCheck)

// User store
export const userStore = createStore({  state() {
  const user = localStorage.getItem('user')
    if (user) {
      return {
        user: JSON.parse(user)
      }
    } else {
      return {
        user: null
      }
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  }
})

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(userStore)
  .use(router)
  .mount('#app')