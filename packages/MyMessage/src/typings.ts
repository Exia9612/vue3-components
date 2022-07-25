export const messageTypes = ['success', 'warning', 'error', 'info'] as const

export const messageTypeObj = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info'
}

export interface MessageOptions {
  [index: string]: string | number | undefined,
  type?: string,
  message?: string,
  duration?: number
}

/*
  MyMessage({
    type: ....,
    message: ....
  })
*/
export type MessageFn = (options: MessageOptions) => void

/*
  MyMessage.success({
    message: ....
  })
*/
export interface Message extends MessageFn {
  success: MessageFn,
  warning: MessageFn,
  error: MessageFn,
  info: MessageFn,
}

export interface messageExpose {
  setVisible: (flag: boolean) => Promise<void>,
  setTop: (value: number) => void,
  height: number,
  margin: number
}