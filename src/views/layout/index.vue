<template>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <LayoutFixed v-show="y >= 80"></LayoutFixed>
  <div style="min-width: 1300px;background-color: rgb(245, 245, 245);">首页</div>
  <LayoutFooter></LayoutFooter>
</template>

<script setup>
import LayoutNav from './LayoutNav.vue';
import LayoutHeader from './LayoutHeader.vue';
import LayoutFooter from './LayoutFooter.vue';
import LayoutFixed from './LayoutFixed.vue';
import { getCategory } from '@/apis/layout';
import { useScroll } from '@vueuse/core'

//获取滚动距离
const { x, y, isScrolling, arrivedState, directions } = useScroll(window)
//获取全部分类
</script>

<style scoped></style>
