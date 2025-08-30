<script setup>
import { getCategory } from './apis/test';

getCategory().then(res => console.log(res))
</script>

<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
