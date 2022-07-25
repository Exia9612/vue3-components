import { App, ComponentPublicInstance, createApp, ref, watch } from 'vue'
import MyMessageBox from './src/index.vue'
import { messageTypes, MessageOptions, MessageFn, Message, messageExpose } from './src/typings'

/*
  MyMessage({
    type: ....,
    message: ....
  })

  MyMessage,success({
    message: ....
  })
*/

const messageBoxes = ref<ComponentPublicInstance<messageExpose>[]>([])

export const MyMessage: MessageFn & Partial<Message> = (options: MessageOptions) => {
  const messageBox = createApp(MyMessageBox, options)
  displayMessageBox(messageBox, options.duration || 2000)
}

// ts中怎样使用documentfragment？？
function displayMessageBox(app: any, duration: number) {
  const oFrag = document.createDocumentFragment()
  const messageBoxInstance = app.mount(oFrag) as ComponentPublicInstance<messageExpose>
  document.body.appendChild(oFrag)
  messageBoxes.value.push(messageBoxInstance)
 
  const currentInstanceTop = calcTop(messageBoxInstance)
  messageBoxInstance.setTop(currentInstanceTop)
  messageBoxInstance.setVisible(true)
  watch(messageBoxes, () => {
    const nextTop = calcTop(messageBoxInstance)
    messageBoxInstance.setTop(nextTop)
  })
  closeMessageBox(app, messageBoxInstance, duration)
}

function closeMessageBox(app: App<Element>, vm: ComponentPublicInstance<messageExpose>, duration: number) {
  let timer: ReturnType<typeof setTimeout> | null = null
  timer = setTimeout(async () => {
    await vm.setVisible(false)
    app.unmount()
    messageBoxes.value = messageBoxes.value.filter(item => item !== vm)
    clearTimeout(timer as NodeJS.Timeout)
    timer = null
  }, duration)
}

function calcTop(vm: ComponentPublicInstance<messageExpose>): number {
  const index = messageBoxes.value.findIndex(item => item === vm)
  return vm.margin * index + (index + 1) * vm.height
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