<template>
  <transition>
     <div
      class="my-carousel-item"
      v-if="state.selfIndex === carouselProvide.currentIndex.value">
      <slot>{{ state.selfIndex }}</slot>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { getCurrentInstance, inject, onMounted, reactive, ref } from 'vue';
import { myCouserlProvideKey, CarouselItemContext } from './typing'

defineOptions({
  name: 'my-carousel-item'
})

const componentInstance = getCurrentInstance()
// my-carousel-item的自身属性，无由父组件法提供
const state = reactive({
  selfIndex: componentInstance?.vnode.key as number - 1
})

// 给provider提供默认值
const carouselProvide = inject(myCouserlProvideKey, {
  currentIndex: ref<number>(0),
  couselItems: ref<CarouselItemContext[]>([]),
  addCarouselItem: () => {}
})

onMounted(() => {
  carouselProvide.addCarouselItem({})
})
</script>

<style lang="scss" scoped>
.my-carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(223, 223, 223);
}

.v-enter-active,
.v-leave-active {
  transition: all .3s linear
}

.v-enter-from {
transform: translateX(100%)
}

.v-enter-to {
  transform: translateX(0)
}

.v-leave-active {
  transform: translateX(0)
}
.v-leave-to {
  transform: translateX(-100%);
}

img {
  width: 100%;
}
</style>