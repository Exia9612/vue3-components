<template>
  <div
    class="carousel-item-dot"
    v-if="hasDot">
    <div
      class="dot-item"
      v-for="item in carouselProvide?.couselItems.value.length"
      :key="`dot-item-${item}`">
      <a
        href="javascript:;"
        class="dot-link"
        :style="{ backgroundColor: (item === carouselProvide?.currentIndex.value as number + 1) ? '#fff' : props.dotColor }"
        @click="handleDotClick(item - 1)">
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { myCouserlProvideKey } from './typing'

defineOptions({
  name: 'carousel-item-dot'
})

// props
const props = withDefaults(defineProps<{
  dotColor: string,
  hasDot: boolean
}>(), {
  dotColor: '#ddd',
  hasDot: false
})

// emit
const emit = defineEmits<{
  (event: 'clickDot', dotIndex: number): void
}>()

// event
const handleDotClick = (dotIndex: number) => {
  emit('clickDot', dotIndex)
}

const carouselProvide = inject(myCouserlProvideKey)
</script>

<style lang="scss" scoped>
.carousel-item-dot {
  width: 70px;
  height: 13px;
  border-radius: 10px;
  position: absolute;
  bottom: 15px;
  text-align: center;
  font-size: 0;
  left: 50%;
  z-index: 9;
  margin-left: -35px;
  background-color: rgba(255,255,255,.3);

  .dot-item {
    display: inline-block;
    margin: 3px;

    .dot-link {
      display: block;
      padding-top: 8px;
      width: 8px;
      height: 0;
      border-radius: 50%;
      background: #fff;
    }
  }
}
</style>