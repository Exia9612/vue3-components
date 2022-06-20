
<template>
  <div class="container">
    <p :onclick="handleMenuItem">组件示例</p>
    <my-carousel
      height="100%"
      :autoplay="true"
      :duration="3000"
      :initialIndex="1"
      :hasDot="true"
      :hasDirector="true">
      <my-carousel-item
        v-for="item in 4"
        :key="item">
        <h3>{{ item }}</h3>
      </my-carousel-item>
    </my-carousel>
    <!-- <my-selector>
      :menuData="testMenuData"
      @setMenuItemValue="handleMenuItem">
    </my-selector> -->
  </div>
</template>
 
<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
 
export default defineComponent({
  name: 'App',
  setup() {
    const testMenuData = [
      {
        id: 1,
        value: 'react',
        text: 'ReactJs'
      },
      {
        id:2,
        value: 'react-hooks',
        text: 'React Hooks'
      },
      {
        id:3,
        value: 'vue2',
        text:'vue#.x'
      }
    ]
    const count: Ref<number> = ref(0)
    const handleMenuItem = (value: string | number) => {
      console.log(value)
    }

    return {
      count,
      handleMenuItem,
      testMenuData
    }
  }
});
</script>
 
<style lang="scss" scoped>
.container {
  width: 520px;
  height: 280px;
  margin: 150px auto;
}
</style>