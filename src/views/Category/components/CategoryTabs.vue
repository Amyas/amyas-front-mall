<template>
  <VanTabs v-model="currentTab">
    <VanTab
      v-for="(item, index) in currentCate.children"
      :key="index"
      :title="item.name">
      <VanList
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">
        <VanCard
          v-for="(item, index) in goods"
          :key="index"
          :price="item.goods_price"
          :desc="item.goods_intro"
          :title="item.goods_name"
          :thumb="item.goods_carousel[0]" />
      </VanList>
    </VanTab>
  </VanTabs>
</template>
<script>
export default {
  props: {
    currentCate: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      currentTab: 0
    }
  },
  methods: {
    handleTabChange () {

    }
  }
}
</script>
