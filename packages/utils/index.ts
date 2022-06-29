import { InjectionKey, inject } from 'vue'

export function injectStrict<T> (injectKey: InjectionKey<T>, defaultSetting?: T) {
  let resolve: T | undefined
  if (defaultSetting) {
    resolve = inject(injectKey) 
  } else {
    resolve = inject(injectKey, defaultSetting) 
  }

  if (!resolve) {
    throw new Error(`Could not resolve ${injectKey.description}`)
  }
  return resolve
}

export function getStyle(el: HTMLElement, prop: string) {
 const style = getComputedStyle(el)
 return style.getPropertyValue(prop)
}

export function getMouseCoordinate(event: MouseEvent) {
  return {
    x: event.pageX,
    y: event.pageY
  }
}
