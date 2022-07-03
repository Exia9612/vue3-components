
<template>
  <div class="container">
    <p :onclick="handleMenuItem">组件示例</p>
    <!-- <my-carousel
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
    </my-carousel> -->
    <!-- <my-selector>
      :menuData="testMenuData"
      @setMenuItemValue="handleMenuItem">
    </my-selector> -->
    <!-- <my-magnifier
      :width="width"
      :height="height"
      :magWidth="magWidth"
      :magHeight="magHeight"
      :link="link"
      :blank="blank"
      :url="url"
      :imgAlt="imgAlt">
     </my-magnifier>  -->
    <button @click="handleClickSuccess">
      click success
    </button>
    <button @click="handleClickError">
      click error
    </button>
    <button @click="handleClickWarning">
      click warning
    </button>
    <button @click="handleClickInfo">
      click info
    </button>
  </div>
</template>
 
<script lang="ts">
import { defineComponent, reactive, Ref, ref, toRefs } from 'vue';
import { MyMessage } from '../packages/MyMessageBox'
 
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
    const magnifierData = reactive({
      width: '800px',
      height: '533px',
      magWidth: '100px',
      magHeight: '100px',
      link: 'www.baidu.com',
      blank: false,
      url: '../assets/images/sydney.jpeg',
      imgAlt: ''
    })

    const handleClickSuccess = () => {
      MyMessage.success!({
        message: 'success'
      })
    }

    const handleClickError = () => {
      MyMessage.error!({
        message: 'error'
      })
    }

    const handleClickWarning = () => {
      MyMessage.warning!({
        message: 'warning'
      })
    }

    const handleClickInfo = () => {
      MyMessage.info!({
        message: 'info'
      })
    }

    const type: Ref<string> = ref('success')

    return {
      count,
      handleMenuItem,
      testMenuData,
      handleClickSuccess,
      handleClickError,
      handleClickWarning,
      handleClickInfo,
      ...toRefs(magnifierData),
      type
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