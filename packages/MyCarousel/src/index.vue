<template>
  <div
    class="my-carousel"
    :style="`height: ${height} `">
    <div
      class="inner"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave">
      <DotItem
        :hasDot="props.hasDot"
        :dotColor="props.dotColor"
        @clickDot="handleDotClick">
      </DotItem>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, onMounted, provide, ref } from 'vue';
import { myCouserlProvideKey, CarouselItemContext, PLAYOPTIONS } from './typing'
import DotItem from './dot.vue'

defineOptions({
  name: 'my-carousel'
})

const props = withDefaults(defineProps<{
  height: string,
  autoplay: boolean,
  duration: number,
  initialIndex: number,
  hasDot: boolean,
  hasDirector: boolean,
  dotColor?: string
}>(), {
  height: '100px',
  autoplay: true,
  duration: 2000,
  initialIndex: 0,
  hasDot: false,
  hasDirector: false,
  dotColor: '#ddd'
})

// refs
const currentIndex = ref<number>(props.initialIndex)
const couselItems = ref<CarouselItemContext[]>([])
const timer = ref<ReturnType<typeof setInterval> | null>(null)

const playSlides = () => {
  timer.value = setInterval(() => {
    setCurrentIndex(PLAYOPTIONS.NEXT)
  }, props.duration) 
}

function addCarouselItem(carouselItemContext: CarouselItemContext) {
  couselItems.value.push(carouselItemContext)
}

function setCurrentIndex(playOption: PLAYOPTIONS) {
  switch (playOption) {
    case PLAYOPTIONS.NEXT:
      if (currentIndex.value + 1 >= couselItems.value.length) {
        currentIndex.value = 0
      } else {
        currentIndex.value += 1
      }
      break
    case PLAYOPTIONS.PREV:
      if (currentIndex.value - 1 < 0) {
        currentIndex.value = couselItems.value.length - 1
      } else {
        currentIndex.value -= 1
      }
      break
    default:
      break
  }
}

function pauseTimer() {
  if (timer.value) {
    clearInterval(timer.value)
    timer.value = null
  }
}

function handleDotClick(index: number) {
  currentIndex.value = index
}

function mouseEnter() {
  pauseTimer()
}

function mouseLeave() {
  playSlides()
}

onMounted(() => {
  playSlides()
})

onBeforeMount(() => {
  if (timer.value) {
    pauseTimer()
  }
})

// 因为属性传递无法传递给slot,但可以通过provide
provide(myCouserlProvideKey, {
  currentIndex,
  couselItems,
  addCarouselItem // 在slot中触发事件并不知道需要向上传递多少层后，直接传递函数最好
})
</script>

<style lang="scss" scoped>
  .my-carousel {
    width: 100%;
    height: 100%;
    .inner {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
</style>