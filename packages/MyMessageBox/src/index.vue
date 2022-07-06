<template>
  <transition name="my-messagebox-fade">
    <div
      v-show="visible"
      :class="styleClass"
      :style="{
        top: top + 'px'
      }">
      {{ props.message }}
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, toRefs } from 'vue'
import { messageTypeObj } from './typings'

defineOptions({
  name: 'my-messagebox'
})

const props = defineProps({
  type: {
    type: String,
    default: messageTypeObj.SUCCESS,
    validator: (value: string) => {
      return Object.values(messageTypeObj).includes(value)
    }
  },
  message: {
    type: String,
    default: 'my-messagebox'
  },
  duration: {
    type: Number,
    default: 2
  }
})

// 仅对styleClass定义了getter函数
const styleClass = computed(() => {
  return ['my-message', props.type]
})

const state = reactive({
  visible: false,
  top: 20
})
const { visible, top } = toRefs(state)
const timer = ref<ReturnType<typeof setTimeout> | null>(null)

const setVisible = async (flag: boolean) => {
  return new Promise((resolve, reject) => {
    state.visible = flag
    timer.value = setTimeout(() => {
      resolve('')
      if (timer.value) {
        clearTimeout(timer.value)
      }
    }, 300)
  })
}

const setTop = (value: number) => {
  state.top = value
}

// expose，对外暴露的属性或方法，挂载到实例上
defineExpose({
  setVisible,
  setTop,
  height: 48,
  margin: 24
})
</script>

<style lang="scss" scoped>
.my-message {
  position: fixed;
  top: 16px;
  left: 50%;
  width: 380px;
  height: 46px;
  margin-left: -190px;
  text-align: center;
  line-height: 46px;
  font-size: 15px;
  border-radius: 5px;
  transition: top .3s ease-out;

  &.success {
    background-color: #f0f9eb;
    color: #529b2e;
    border: 1px solid #529b2e;
  }

  &.warning {
    background-color: #fdf6ec;
    color: #b88230;
    border: 1px solid #b88230;
  }

  &.info {
    background-color: #f4f4f5;
    color: #73767a;
    border: 1px solid #73767a;
  }

  &.error {
    background-color: #fef0f0;
    color: #c45656;
    border: 1px solid #c45656;
  }
}

.my-messagebox-fade-enter-active {
  transition: all .3s ease-in;
}

.my-messagebox-fade-leave-active {
  transition: all .3s ease-out;
}

.my-messagebox-fade-enter-from,
.my-messagebox-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>