<template>
  <transition name="message-box-tran">
    <div
      v-if="visible"
      class="ui-message-box"
      @click="cancelBtnClick">
      <div
        class="ui-message-box-wrapper"
        @click.stop>
        <div class="message-box-title">
          <h1>{{ title }}</h1>
          <span
            class="iconfont icon-close"
            @click="cancelBtnClick">
          </span>
        </div>
        <div class="message-box-content">
          <!-- <p>{{ content }}</p> -->
          <content-view :field="field"></content-view>
        </div>
        <div class="message-box-btn-group">
          <button
            class="btn btn-primary"
            @click="confirmBtnClick">
            {{ confirmBtnText }}
          </button>
          <button
            v-if="showCancelBtn"
            class="btn btn-default"
            @click="cancelBtnClick">
            {{ cancelBtnText }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { h, reactive, ref, toRefs } from 'vue';
import { messageBoxFns, setVisibleCb, IMeassageBoxReactive } from './typings'

defineOptions({
  name: 'my-message'
})

const props = defineProps({
  title: {
    type: String,
    default: 'Message'
  },
  content: {
    type: String,
    default: 'messagebox content'
  },
  showCancelBtn: {
    type: Boolean,
    default: false
  },
  confirmBtnText: {
    type: String,
    default: 'confirm'
  },
  cancelBtnText: {
    type: String,
    default: 'cancel'
  },
  field: {
    type: String,
    default: 'confirm',
    // validator: (value) => {
    //   return messageBoxFns.includes(value)
    // }
  }
})

// reactive
const state = reactive<IMeassageBoxReactive>({
  visible: false,
  promptValue: '',
  type: ''
})

//refs
let { visible } = toRefs(state)

const setVisible = (flag: boolean, callBack?: setVisibleCb) => {
  state.visible = flag
  if (callBack) callBack(flag)
}

const confirmBtnClick = () => {
  setVisible(false)
}

const cancelBtnClick = () => {
  setVisible(false)
}

const closeClick = () => {
  setVisible(false)
}

const ContentView = ({ field }: { field: string }) => {
  state.type = field
  switch (field) {
    case !field || 'confirm':
      return h('p', null, props.content)
    case 'prompt':
      return h('input', {
        value: state.promptValue,
        onInput: (e: InputEvent) => state.promptValue = (e.target as HTMLInputElement).value,
        class: 'message-input'
      })
    default:
      return ''
  }
}

// expose
defineExpose({
  setVisible
})

</script>

<style lang="scss" scoped>
.message-box-tran-leave-to,
.message-box-tran-enter-from {
  opacity: 0;
}

.message-box-tran-enter-active {
  transition: opacity .2s ease-in;
}

.message-box-tran-leave-active {
  transition: opacity .2s ease-out;
}

.ui-message-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);

  .ui-message-box-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 420px;
    height: 200px;
    margin: -100px 0 0 -210px;
    background-color: #fff;
    border-radius: 3px;

    h1,
    p {
      margin: 0;
      font-weight: normal;
    }

    .message-box-title {
      padding: 15px 15px 10px;

      h1 {
        display: inline-block;
        font-size: 10px;
      }

      .icon-close {
        float: right;
        font-size: 12px;
        color: #999;
      }
    }

    .message-box-content {
      padding: 10px 15px;
      p {
        font-size: 15px;
      }
    }

    .message-box-btn-group {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 5px 15px 15px;
      box-sizing: border-box;
      button {
        float: right;
      }
    }
  }

  .btn {
    border: none;
    outline: none;
    height: 32px;
    padding: 8px 15px;
    border-radius: 5px;

    &.btn-primary {
      background-color: #4093ff;
      color: #fff;
      margin-left: 10px;
    }

    &.btn-default {
      background-color: #fff;
      border: 1px solid #ddd;
    }
  }

  .message-input {
    border: none;
    outline: none;
    width: 100%;
    border: 1px solid #ddd;
    height: 32px;
    box-sizing: border-box;
  }
}
</style>