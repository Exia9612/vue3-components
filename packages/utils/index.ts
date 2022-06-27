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