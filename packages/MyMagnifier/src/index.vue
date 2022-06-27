<template>
  <div
    class="img-wrap"
    :style="{
      width: width,
      height: height
    }">
    <a
      class="mag-wrap"
      :href="link"
      :target="blank ? '_blank' : ''"
      :style="{
        width: magWidth,
        height: magHeight
      }">
      <img
        class="mag-img"
        :src="url"
        :alt="imgAlt">
    </a>
  </div>
</template>

<script lang="ts" setup>
  defineOptions({
    name: 'my-magnifier'
  })

  const props = withDefaults(defineProps<{
    width: string,
    height: string,
    magWidth: string,
    magHeight: string,
    link: string,
    blank: boolean,
    url: string,
    imgAlt: string
  }>(), {
    width: '300px',
    height: '200px',
    magWidth: '100px',
    magHeight: '100px',
    link: '',
    blank: false,
    url: ''
  })
</script>

<style lang="scss">

</style>