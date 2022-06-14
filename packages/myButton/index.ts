import { App } from 'vue'
import MyButton from './src/index.vue'

MyButton.install = (app: App): void => {
  app.component(MyButton.name, MyButton)
}

export default MyButton