<template>
  <button class="nd-btn">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
name: "my-button"
})
</script>

<style scoped>
</style>
