import { App } from 'vue'
import MyButton from './myButton'
import MySelector from './MySelecter'

const Components = [
  MySelector,
  MyButton
]

const install = (app: App): void => {
  Components.map((component) => {
    app.component(component.name, component)
  })
}

export default {
  install
}