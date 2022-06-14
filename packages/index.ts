import { App } from 'vue'
import MyButton from './myButton'

const Components = [
  MyButton
]

const install = (app: App): void => {
  Components.map((component) => app.component(component.name, component))
}

export {
  MyButton
}

export default {
  install
}