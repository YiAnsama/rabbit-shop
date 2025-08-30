<template>
  <div class="header-wrap">
    <header class="header">
      <img src="../../assets/images/logo.png" alt="" style="cursor: pointer;">
      <RouterLink class="nav-item">首页</RouterLink>
      <RouterLink class="nav-item">居家</RouterLink>
      <RouterLink class="nav-item">美食</RouterLink>
      <RouterLink class="nav-item">服饰</RouterLink>
      <RouterLink class="nav-item">母婴</RouterLink>
      <RouterLink class="nav-item">护理</RouterLink>
      <RouterLink class="nav-item">严选</RouterLink>
      <RouterLink class="nav-item">数码</RouterLink>
      <RouterLink class="nav-item">运动</RouterLink>
      <RouterLink class="nav-item">杂项</RouterLink>
      <RouterLink class="nav-item" style="height: 16px;line-height: 16px; border-left: 2px solid #27ba9b;">品牌
      </RouterLink>
      <RouterLink class="nav-item">专题</RouterLink>
    </header>
  </div>


</template>

<script setup>
import { ref } from 'vue';

const input = ref('')
</script>

<style scoped>
.header-wrap {
  display: flex;
  position: fixed;
  z-index: 100;
  top: 0px;
  width: 100%;
  justify-content: center;
  background-color: white;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  /* width: 100vw; */
  width: 1300px;
  height: 100px;
  color: black;
  background-color: white;
}

.nav-item {
  height: 100%;
  line-height: 100px;
  padding: 0 10px;
  font-size: 16px;
  color: black;
  cursor: pointer;
}

.nav-item:hover {
  color: #27ba9b;
}

.responsive-input {
  width: 240px;
  color: black;
  font-size: 15px;
}

.el-input__icon {
  color: black;
  font-size: 19px;
}

.cart-icon {
  margin-left: 10px;
  font-size: 22px;
}

.item-wrap {
  display: flex;
  align-items: center;
}
</style>
