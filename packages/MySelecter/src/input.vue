<template>
  <div class="selector-input">
    <label class="placeholder">{{ placeholder }}</label>
    <input
      type="text"
      class="input"
    />
    <span class="iconfont icon-arrow-down"></span>
  </div>
</template>

<script lang="ts" setup>
interface IInputProps {
  label: string,
  placeholder: string
}

/*
 如果使用TS的话可以直接传入类型进行参数声明，我们可能会去将参数的类型给抽离出来以重复利用，但是如果在 defineProps 使用外部引入的interface或者type会报错的,它提醒我们要使用字面量类型，当前在github上vue的issue已经有这个问题了，目前还没解决，期待早日完善，目前的方法就是类型只能写在当前的vue文件中。
*/
const props = withDefaults(defineProps<IInputProps> (), {
  label: '',
  placeholder: '请选择'
})
</script>

<style lang="scss" scoped>
.selector-input {
  position: relative;
  width: 100%;
  height: 38px;

  .input {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #999;
    border-radius: 5px;
    outline: none;
    transition: all .2s linear;

    &:focus {
      border-color: #1890ff;
      box-shadow: 0 0 3px #1890ff;
    }
  }

  .placeholder {
    position: absolute;
    left: 15px;
    top: 8px;
    color: #999;
  }

  .iconfont {
    position: absolute;
    right: 15px;
    top: 12px;
    color: #999;

    &.icon-search {
      font-size: 22px;
      top: 8px;
    }
  }
}
</style>
