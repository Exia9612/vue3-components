import { App, ComponentPublicInstance, createApp, createVNode } from 'vue'
import MyMessageBox from './src/index.vue'
import { messageTypes, MessageBoxOptions, MessageFn, Message } from './src/typings'

/*
  MyMessage({
    type: ....,
    message: ....
  })

  MyMessage,success({
    message: ....
  })
*/

export const MyMessage: MessageFn & Partial<Message> = (options: MessageBoxOptions) => {
  const messageBox = createApp(MyMessageBox, options)
  displayMessageBox(messageBox, options.duration || 2000)
}

// ts中怎样使用documentfragment？？
function displayMessageBox(app: any, duration: number) {
  const oFrag = document.createDocumentFragment()
  const messageBoxInstance = app.mount(oFrag) as ComponentPublicInstance<{
    setVisible: (flag: boolean) => Promise<void>
  }>
  document.body.appendChild(oFrag)
  messageBoxInstance.setVisible(true)
  closeMessageBox(app, messageBoxInstance, duration)
}

function closeMessageBox(app: App<Element>, vm: ComponentPublicInstance<{
  setVisible: (flag: boolean) => Promise<void>
}>, duration: number) {
  setTimeout(async () => {
    console.log('close')
    await vm.setVisible(false)
    console.log('unmount')
    app.unmount()
  }, duration)
}

messageTypes.forEach((type) => {
  MyMessage[type] = (options) => {
    return MyMessage({
      ...options,
      type
    })
  }
})

export default MyMessageBox