<script setup lang="ts">
import { ref } from "vue";

const onClickLeft =  () => { console.log("onClickLeft"); };
const onClickRight = () => { console.log("onClickRight"); };

// 这里的active和模板中的item已双向绑定，active的值随着选中的标签变化而变化
const active = ref("home");
// 当van-tabbar-item不加name属性的时候，change事件的参数为索引值。反之，则为name属性的值
const onChangeTabBar = (name: string) => {
  console.log(active.value);
};
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
  <van-tabbar v-model="active" @change="onChangeTabBar">
    <van-tabbar-item name="home" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item name="friends" icon="friends-o">队伍</van-tabbar-item>
    <van-tabbar-item name="user" icon="user-o">个人</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>

</style>