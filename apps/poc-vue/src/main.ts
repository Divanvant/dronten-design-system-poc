import '@dronten/design-tokens/dist/index.css'
import '@dronten/assets/src/reset.css'
import '@dronten/font/src/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
