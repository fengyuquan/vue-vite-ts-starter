import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'

import 'element-plus/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'

import 'normalize.css'
import './styles/index.scss'

const app = createApp(App)

app.use(ElementPlus, { locale })
app.use(createPinia())
app.use(router)

app.mount('#app')
