import { InjectionKey, Ref } from 'vue'

export interface IMyCarouselItemReac {
  selfIndex: number
}

// carouselItem暴露的一些属性
export type CarouselItemContext = {
  countCarouselItem?: number
}

export enum PLAYOPTIONS {
  NEXT = 'next',
  PREV = 'prev'
}

// provider
interface IMyCarouselProvide {
  currentIndex: Ref<number>,
  couselItems: Ref<CarouselItemContext[]>,
  addCarouselItem: (carouselItemContext: CarouselItemContext) => void
}

// 使用 InjectionKey 在提供者和消费者之间同步注入值的类型
export const myCouserlProvideKey: InjectionKey<IMyCarouselProvide> = Symbol('MyCouserlProvideKey')