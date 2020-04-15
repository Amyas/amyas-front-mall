<template>
  <div class="categroy">
    <div class="categroy-content">
      <div class="categroy-left">
        <VanSidebar v-model="sidebarActive">
          <VanSidebarItem
            v-for="(item, index) in 20"
            :key="index"
            :title="`标签${item}`" />
        </VanSidebar>
      </div>
      <div class="categroy-right">
        <VanTabs>
          <VanTab
            v-for="(item, index) in 4"
            :key="index"
            :title="`标题${item}`">
            <VanList
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
              <VanCard
                v-for="(item, index) in list"
                :key="index"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
            </VanList>
          </VanTab>
        </VanTabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sidebarActive: '',
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
