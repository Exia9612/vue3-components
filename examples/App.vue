
<template>
  <div>组件示例</div>
  <div>{{ count }}</div>
  <my-button @click="handleClick">按钮</my-button>
</template>
 
<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
 
export default defineComponent({
  name: 'App',
  components: {
  },
  setup() {
    const count: Ref<number> = ref(0)
    const handleClick = () => {
      count.value++
    }

    return {
      count,
      handleClick
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