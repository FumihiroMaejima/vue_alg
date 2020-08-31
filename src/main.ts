import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import client from './client'

const app = createApp(App)

app.config.globalProperties.$client = client

// createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

require('@/assets/scss/App.scss')
