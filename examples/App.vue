
<template>
  <div>
    <p :onclick="test">组件示例</p>
    <my-selector></my-selector>
  </div>
</template>
 
<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
 
export default defineComponent({
  name: 'App',
  setup() {
    const count: Ref<number> = ref(0)
    const handleClick = () => {
      count.value++
    }

    return {
      count,
      handleClick
    }
  },
  methods: {
    test() {
      console.log(this)
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