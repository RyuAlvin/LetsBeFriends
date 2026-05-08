<script setup lang="ts">
const onClickLeft =  () => { console.log("onClickLeft"); };
const onClickRight = () => { console.log("onClickRight"); };
</script>

<template>
  <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight">
    <template #title>
      <h1>未定</h1>
    </template>
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
</template>

<style scoped>

</style>