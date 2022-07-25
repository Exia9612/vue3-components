import { App } from 'vue'
import MyButton from './myButton'
import MySelector from './MySelecter'
import { MyCarousel, MyCarouselItem } from './MyCarousel'
import { MyMagnifier } from './MyMagnifier'
import MyMessage from './MyMessage'
import { MyMessageBox } from './MyMessageBox'


const Components = [
  MySelector,
  MyButton,
  MyCarousel,
  MyCarouselItem,
  MyMagnifier,
  MyMessage
]

const install = (app: App): void => {
  Components.map((component) => {
    console.log(component.name, component)
    app.component(component.name, component)
  })
  app.config.globalProperties.$messageBox = MyMessageBox
}

export {
  MyMessageBox 
}

export default {
  install
}