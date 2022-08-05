import { createApp } from 'vue'
import App from './App.vue'
import installMyComponents from '~/index'

const app = createApp(App)
app.use(installMyComponents).mount('#app')
