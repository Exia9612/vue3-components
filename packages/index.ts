import { App } from 'vue'
import MyButton from './myButton'
import MySelector from './MySelecter'
import { MyCarousel, MyCarouselItem } from './MyCarousel'

const Components = [
  MySelector,
  MyButton,
  MyCarousel,
  MyCarouselItem
]

const install = (app: App): void => {
  Components.map((component) => {
    console.log(component.name, component)
    app.component(component.name, component)
  })
}

export default {
  install
}