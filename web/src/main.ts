import '@a/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './lang/init'
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(pinia)

app.mount('body')

