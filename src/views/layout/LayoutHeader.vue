<template>
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
    <div class="item-wrap">
      <el-input v-model="input" class="responsive-input" placeholder="请输入商品" clearable>
        <template #prefix>
          <el-icon class="el-input__icon">
            <search />
          </el-icon>
        </template>
      </el-input>
      <el-icon class="cart-icon">
        <ShoppingCart />
      </el-icon>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const input = ref('')
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  width: 100vw;
  min-width: 1300px;
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
