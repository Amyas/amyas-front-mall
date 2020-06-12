<template>
  <div class="categroy">
    <div class="categroy-content">
      <div class="categroy-left">
        <VanSidebar v-model="currentSidebar">
          <VanSidebarItem
            v-for="(item, index) in categoryList"
            :key="index"
            :title="item.name" />
        </VanSidebar>
      </div>
      <div class="categroy-right">
        <VanTabs v-model="currentTab">
          <VanTab
            v-for="(item, index) in currentCate.children"
            :key="index"
            :title="item.name">
          </VanTab>
        </VanTabs>
        <VanList
          v-if="currentCate.children.length"
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
            :thumb="item.goods_carousel[0]"
            @click="handleToGoods(item)" />
        </VanList>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentSidebar: 0,
      currentTab: 0,
      loading: false,
      finished: false,

      categoryList: [],
      goods: [],
      pageSize: 10,
      pageNumber: 0,
      total: 0
    }
  },
  computed: {
    currentCate () {
      return this.categoryList[this.currentSidebar] || { children: [] }
    }
  },
  watch: {
    currentSidebar () {
      if (this.currentTab !== 0) {
        this.currentTab = 0
      } else {
        this.goods = []
        this.total = 0
        this.finished = false
        this.pageNumber = 0
        this.onLoad()
      }
    },
    currentTab (val) {
      this.goods = []
      this.total = 0
      this.finished = false
      this.pageNumber = 0
      this.onLoad()
    }
  },
  async created () {
    const cate = await this.$apis.category.list()
    this.categoryList = cate.items
  },
  methods: {
    /**
     * @description 跳转到商品详情
     */
    handleToGoods (item) {
      this.$router.push({
        name: 'Goods',
        params: {
          id: item._id
        }
      })
    },
    /**
     * @description 列表加载
     */
    async onLoad () {
      this.loading = true
      const defaultCate = this.currentCate.children[this.currentTab]
      const goods = await this.$apis.goods.list({
        goods_cate: defaultCate._id,
        pageNumber: ++this.pageNumber,
        pageSize: this.pageSize
      })
      this.goods = this.goods.concat(goods.items)
      this.total = goods.total

      // 加载状态结束
      this.loading = false

      //   // 数据全部加载完成
      if (this.goods.length >= this.total) {
        this.finished = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.categroy {
  height: 100%;
  padding-bottom: 100px;

  /deep/ .van-tabs__wrap {
    position: sticky;
    left: 0;
    top: 0;
    z-index: 99;
  }
}

.categroy-content {
  position: relative;
  height: 100%;
}

.categroy-left {
  position: absolute;
  left: 0;
  top: 0;
  width: 167px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  border-right: 1px solid rgba($color: #000, $alpha: 0.1);
}

.categroy-right {
  height: 100%;
  padding-left: 167px;
  overflow-x: hidden;
  overflow-y: auto;
}

</style>
