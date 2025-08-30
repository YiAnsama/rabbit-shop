<template>
  <header class="header-wrap">
    <div class="header">
      <RouterLink class="nav-item" style="border: 0;">请先登录</RouterLink>
      <RouterLink class="nav-item">帮助中心</RouterLink>
      <RouterLink class="nav-item">关于我们</RouterLink>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.header-wrap {
  background-color: rgb(44, 44, 44);
  min-width: 1300px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: 10px;
  width: 100vw;
  height: 45px;
  color: white;
  background-color: rgb(44, 44, 44);
}

.nav-item {
  height: 15px;
  font-size: 15px;
  line-height: 15px;
  padding: 0 20px;
  color: rgb(212, 212, 212);
  border-left: 1px solid white;
}

.nav-item:hover {
  color: white;
}
</style>
