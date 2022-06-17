
<template>
  <div>
    <p :onclick="handleMenuItem">组件示例</p>
    <my-selector
      :menuData="testMenuData"
      @setMenuItemValue="handleMenuItem">
    </my-selector>
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
 
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>