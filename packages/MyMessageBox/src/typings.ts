export type OperationState = 'confirm' | 'close' | 'cancel'
export type MessageBoxType = 'success' | 'error' | 'warning'
export const messageBoxFns = ['confirm', 'prompt'] as const

export interface MessageBoxResponseData {
  value: string,
  action: OperationState
}

export type MessageBoxData = MessageBoxResponseData & OperationState

export interface IMessageBoxOptions {
  [index: string]: string | MessageBoxType | undefined | Boolean,
  type?: MessageBoxType,
  title?: string,
  field?: string,
  content?: string,
  showCancelBtn?: Boolean,
  confirmBtnText?: string,
  cancelBtnText?: string
}

export type MessageBoxFn = (options: IMessageBoxOptions) => Promise<MessageBoxData>

export interface MessageBoxShortcutFn extends MessageBoxFn {
  confirm: MessageBoxFn,
  prompt: MessageBoxFn
}

export interface messageBoxExpose {
  // cb需要接受state参数，作为resolve的结果
  setVisible: (flag: boolean, cb: setVisibleCb) => void,
}

export type setVisibleCb = (visible: boolean) => void

export interface IMeassageBoxReactive {
  type: OperationState,
  visible: boolean,
  promptValue: '',
}
