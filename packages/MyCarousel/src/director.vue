<template>
  <transition name="carousel-arrow-left">
    <div
      class="carousel-arrow-container carousel-arrow-left"
      v-if="displayFlag"
      @click="clickLeftArrow">
      <span class="iconfont iconfont-arrow-left"></span>
    </div>
  </transition>
  <transition name="carousel-arrow-right">
    <div
      class="carousel-arrow-container carousel-arrow-right"
      v-if="displayFlag"
      @click="clickRightArrow">
      <span
        class="iconfont iconfont-arrow-right">
      </span>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { myCouserlProvideKey } from './typing';
import { injectStrict } from '../../utils'

defineOptions({
  name: 'carousel-arrow'
})

const props = withDefaults(defineProps<{
  displayFlag: boolean
}>(), {
  displayFlag: false
})

const carouselProvide = injectStrict(myCouserlProvideKey)

const clickLeftArrow = () => {
  if (carouselProvide?.currentIndex.value - 1 >= 0) {
    carouselProvide.currentIndex.value -= 1
  } else {
    carouselProvide.currentIndex.value = carouselProvide.couselItems.value.length - 1
  }
}

const clickRightArrow = () => {
  if (carouselProvide?.currentIndex.value + 1 >= carouselProvide.couselItems.value.length) {
    carouselProvide.currentIndex.value = 0
  } else {
    carouselProvide.currentIndex.value += 1
  }
}
</script>

<style lang="scss" scoped>
.carousel-arrow-container {
  width: 32px;
  height: 32px;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  transition: all .5s ease-out;
  .iconfont {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    font-size: 14px;
    cursor: pointer;
    color: #fff;
    background-color: black;
    opacity: .4;
  }
  &.carousel-arrow-left {
    left: 12px;
  }
  &.carousel-arrow-right {
    right: 12px;
  }
}

.carousel-arrow-left-enter-from {
  transform: translateX(-100%) translateY(-50%);
  opacity: 0;
}

.carousel-arrow-left-leave-active {
  transform: translateX(-100%) translateY(-50%);
  opacity: .4;
}

.carousel-arrow-right-enter-from {
  transform: translateX(100%) translateY(-50%);
  opacity: 0;
}

.carousel-arrow-right-leave-active {
  transform: translateX(100%) translateY(-50%);
  opacity: .4;
}
</style>