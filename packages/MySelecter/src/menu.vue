<template>
  <div class="dropdown-menu">
    <template v-if="state.searchData.length > 0">
      <div
        class="menu-item"
        v-for="(item, index) in state.searchData"
        :key="index"
        @click="handleClick(item)">
        {{ item.text }}
      </div>
    </template>
    <template v-else>
      <no-data-tip>
        - 没有搜索到数据 -
      </no-data-tip>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, watch } from 'vue';
import { IMeunItemData, IMenuState } from './selector'
import NoDataTip from './noDataTip.vue'

defineOptions({
  name: 'SelectorMenu'
})

const props = withDefaults(defineProps<{
  data: IMeunItemData[],
  searchValue: string
}> (), {
  data: () => [],
  searchValue: '',
})

const emit = defineEmits<{
  (event: 'setMenuItemValue', menuItem: IMeunItemData): void
}>()

onMounted(() => {
  state.searchData = props.data
})

watch(
  () => { 
    return props.searchValue
  },
  (value: string) => {
    state.searchData = props.data.filter((menuItem: IMeunItemData) => {
      return menuItem.text.toLowerCase().includes(value)
    })
  }
)

const state:IMenuState = reactive({
  searchData: []
})

const handleClick = (menuItem: IMeunItemData) => {
  emit('setMenuItemValue', menuItem)
}

</script>

<style lang="scss">
.dropdown-menu {
  display: none;
  position: absolute;
  left: 0;
  top: 48px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  border-radius: 5px;
  cursor: pointer;

  .menu-item {
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 14px;
    color: #666;
    margin: 10px 0;
    transition: background-color .2s linear;

    &:hover {
      background-color: #ededed;
    }
  }
}
</style>