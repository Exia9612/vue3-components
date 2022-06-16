<template>
  <div class="selector" v-focus-directive>
    <SelectorInput
      label="姓名"
      placeholder="hello">
    </SelectorInput>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "my-selector"
})
</script>

<script lang="ts" setup>
import focus from '../../directives/focus'
import SelectorInput from './input.vue'

const vFocusDirective = focus
</script>

<style lang="scss" scoped>
.selector {
  position: relative;
  width: 300px;
}
</style>
