<template>
  <div class="no-data-tip">
    <slot>
      - no Data -
    </slot> 
  </div>
</template>

<script lang="ts" setup>
  defineOptions({
    name: 'noDataTip'
  })
</script>

<style >
  .no-data-tip {
    height: 300px;
    line-height: 300px;
    font-size: 16px;
    text-align: center;
    color: #666;
  }
</style>