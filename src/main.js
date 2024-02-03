import { createApp, Vue } from 'vue'
import App from './App.vue'
import router from './router'

import VueWebShareApi from 'vue-web-share-api'

import '@/assets/index.css'

createApp(App).use(router).mount('#app')

Vue.use(VueWebShareApi)