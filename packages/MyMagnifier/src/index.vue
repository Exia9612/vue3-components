<template>
  <div
    v-magnifier-directive
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
        src="./sydney.jpeg"
        :alt="imgAlt"
        :style="{
          width: width,
          height: height
        }">
    </a>
    <a
      class="static-link"
      :href="link">
      <img
        class="static-img"
        src="./sydney.jpeg"
        :alt="imgAlt">
    </a>
  </div>
</template>

<script lang="ts" setup>
  import maginfierDire from '../../directives/magnifier'

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

  //custom directive
  const vMagnifierDirective = maginfierDire
</script>

<style lang="scss">
.img-wrap {
  position: relative;
  .mag-wrap {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    cursor: move;
    overflow: hidden;
    z-index: 10;
    border: 1px solid black;
    &.show {
      display: block;
      transform: scale(2);
    }

    .mag-img {
      position: absolute;
      left: 0;
      right: 0;
    }
  }
  .static-img {
    width: 100%;
    height: 100%;
  }
}
</style>