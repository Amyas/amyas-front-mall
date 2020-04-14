<template>
  <div class="home-goods">
    <div class="home-goods__title">
      热卖商品
    </div>
    <VanList
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad">
      <VanGrid square :column-num="2">
        <VanGridItem
          v-for="(item, index) in list"
          :key="index"
          text="新鲜水果">
          <VanImage
            lazy-load
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-1.jpg">
            <template v-slot:loading>
              <VanLoading type="spinner" size="20" />
            </template>
          </VanImage>
          <div class="goods__title">李子园朱古力风味乳饮料450ml/瓶</div>
          <div class="goods__price">￥5</div>
        </VanGridItem>
      </VanGrid>
    </VanList>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.home-goods__title {
  text-align: center;
  color: #38f;
  font-size: 50px;
  padding: 50px 0;
}

.goods__title {
  width: 100%;
  font-size: 28px;
}

.goods__price {
  color: #38f;
  font-size: 28px;
}
</style>
