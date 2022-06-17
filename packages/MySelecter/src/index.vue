<template>
  <div class="selector" v-focus-directive>
    <SelectorInput
      :inputValue="state.inputValue"
      placeholder="hello"
      @searchOptions="searchOptions">
    </SelectorInput>
    <SelectorMenu
      :data="menuData"
      @setMenuItemValue="handleMenuItemValue"
      :searchValue="state.searchValue"
    >
    </SelectorMenu>
  </div>
</template>

<script lang="ts" setup>
import { IMeunItemData } from './selector'
import focus from '../../directives/focus'
import SelectorInput from './input.vue'
import SelectorMenu from './menu.vue'
import { reactive } from 'vue'

defineOptions({
  name: 'my-selector'
})

const props = withDefaults(defineProps<{
  menuData: IMeunItemData[]
}> (), {
  menuData: () => []
})
// 定义组件内部触发的emit时，emit的类型
const emit = defineEmits<{
  (event: 'setMenuItemValue', menuItemText: string | number): void,
  (event: 'searchOptions', value: string): void
}>()

const vFocusDirective = focus
const state = reactive({
  inputValue: '',
  searchValue: ''
})

const handleMenuItemValue: (a: IMeunItemData) => void = (menuItem: IMeunItemData) => {
  state.inputValue = menuItem.text
  emit('setMenuItemValue', menuItem.value)
}

const searchOptions = (value: string) => {
  state.searchValue = value
}
</script>

<style lang="scss" scoped>
.selector {
  position: relative;
  width: 300px;
}
</style>
