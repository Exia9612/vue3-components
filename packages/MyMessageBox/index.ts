import { messageBoxFns, MessageBoxShortcutFn, MessageBoxFn, IMessageBoxOptions, messageBoxExpose } from './src/typings'
import MessageBox from './src/index.vue'
import { App, ComponentPublicInstance, createApp } from 'vue'


export const MyMessageBox: MessageBoxFn & Partial<MessageBoxShortcutFn> = (options: IMessageBoxOptions) => {
  const messageBox = createApp(MessageBox, options)
  return new Promise((resolve, reject) => {
    displayMessageBox(messageBox, { resolve, reject })
  })
}

const displayMessageBox = (app: App<Element | DocumentFragment>, promiseConstructor: { resolve: Function, reject: Function }) => {
  const oDocumentFragment = document.createDocumentFragment()
  const messageBoxInstance = app.mount(oDocumentFragment) as ComponentPublicInstance<messageBoxExpose>
  document.body.appendChild(oDocumentFragment)
  messageBoxInstance.setVisible(true, (visible: boolean) => {
    if (!visible) {
      switch (type) {
        case 'cancel':
          promiseConstructor.reject('cancel')
          break
        case  'confirm':
          promiseConstructor.resolve(promptValue)
          break
        default:
          promiseConstructor.resolve(type)
          break
      }
    }
  })
}

const removeMessageBox = (app: App<Element | DocumentFragment>) => {
  app.unmount()
}

messageBoxFns.forEach((item) => {
  MyMessageBox[item] = (options: IMessageBoxOptions) => {
    options.field = item
    return MyMessageBox(options)
  }
})