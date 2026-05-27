<script setup lang="ts">
import { computed, ref } from "vue";

/**
 * 搜索框功能
 */
// 搜索内容
const keyword = ref('');
// 搜索功能
const onSearch = () => {
  let result: { id: number; text: string; children: { id: number; text: string; }[]; }[] = [];
  // 遍历从后台检索到的所有标签信息
  tagsInfo.forEach((parent) => {
    // 解构父标签
    const tempParent = {...parent};
    // 若不存在子标签，则跳过后续处理，执行下一个循环
    if (!tempParent.children) return;
    if (tempParent.children.length === 0) return;

    // 解构子标签
    // 解构可以实现浅拷贝，从而在修改新数据时不会影响对象/原数组（仅限第一层属性）。
    // 因此，在解构父标签的前提下，还得对父标签下的属性的子标签进行解构
    const tempChildren = [...tempParent.children];
    // 若子标签中符合搜索内容，则返回
    tempParent.children = tempChildren.filter(tag => tag.text.includes(keyword.value));
    // 最后检查符合搜索内容的子标签是否存在，不存在则不用添加至搜索结果
    if (tempParent.children.length === 0) return;

    // 将符合条件的父标签（子标签）添加至搜索结果
    result.push(tempParent);
  })

  // 将搜索结果重新赋值给需要显示的标签集合对象
  displayTags.value = result;
}
// 取消检索功能
const onCancel = () => {
  // 搜索内容清空
  keyword.value = '';
  // 需要显示的标签集合设置为从后台检索到所有标签信息
  displayTags.value = tagsInfo;
}

/**
 * 所有标签展示功能
 */
// 右侧选中项的ID
let selectedIds = ref<number[]>([]);
// 左侧选中项的索引
const activeIndex = ref(0);
// 选中的标签数据
const selectedTags = computed(() => {
  return displayTags.value
      .flatMap((tag: { children: any; }) => tag.children)
      .filter((child: { id: number; }) => selectedIds.value.includes(child.id))
})
// 从后台检索到所有标签信息
const tagsInfo = [
  {
    id: 1,
    text: '性别',
    children: [
      { id: 2, text: '男111111111111111111' },
      { id: 3, text: '女22222222222' },
    ],
  },
  {
    id: 4,
    text: '方向',
    children: [
      { id: 5, text: 'Java1111' },
      { id: 6, text: 'C++22222' },
      { id: 7, text: 'Go222' },
      { id: 8, text: '前端' },
    ],
  },
  {
    id: 9,
    text: '目标',
    children: [
      { id: 10, text: '考研' },
      { id: 11, text: '春招' },
      { id: 12, text: '秋招' },
      { id: 13, text: '社招' },
    ],
  },
];
// 需要显示的标签数据
const displayTags = ref(tagsInfo);

/**
 * 已选择标签展示
 */
const show = ref(true);
const close = (id: number) => {
  selectedIds.value = selectedIds.value.filter(selectedId => selectedId !== id);
};
</script>

<template>
  <van-search
      v-model="keyword"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
  />
  <van-divider v-if="selectedIds.length !==0 ">已选标签</van-divider>
  <div class="selected-tags">
    <van-row gutter="4">
      <van-col class="selected-tag-col" v-for="tag in selectedTags" :key="tag.id">
        <van-tag :show="show" closeable size="medium" type="primary" @close="close(tag.id)">
          {{ tag.text }}
        </van-tag>
      </van-col>
    </van-row>
  </div>
  <van-divider>可选标签</van-divider>
  <van-tree-select
      class="tree-select"
      v-model:active-id="selectedIds"
      v-model:main-active-index="activeIndex"
      :items="displayTags"
  />
</template>

<style scoped>
.tree-select {
  text-align: left;
}
.selected-tag-col {
  margin: 2px 0;
}
.selected-tags {
  padding: 0 12px;
}
</style>