<template>
  <div class="carousel-arrow-container">
    <transition
      name="carousel-arrow">
      <div class="carousel-arrow"> 
        <span
          class="iconfont">
        </span>
      </div>
    </transition>
    <!-- <transition
      name="carousel-arrow-right">
      <div class="carousel-arrow-right"> 
        <span class="iconfont icon-arrow-right"></span>
      </div>
    </transition> -->
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'carousel-arrow'
})
// 实现carousel按钮， 样式类
</script>

<style lang="scss" scoped>

</style>