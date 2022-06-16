import { createApp } from 'vue'
import App from './App.vue'
import installMyComponents from '~/index'
import '../assets/css/iconfont.css'

const app = createApp(App)
app.use(installMyComponents)
app.mount('#app')

