<template>
  <div class="home">
    <!-- 头部 -->
    <div class="home__header">
      <figure class="iconfont iconchuizi"></figure>
    </div>

    <!-- 搜索 -->
    <HomeSearch />

    <!-- 轮播 -->
    <HomeSwiper />

    <!-- 商品列表 -->
    <HomeGoods />

  </div>
</template>
<script>
import HomeSearch from './components/HomeSearch'
import HomeSwiper from './components/HomeSwiper'
import HomeGoods from './components/HomeGoods'

export default {
  components: {
    HomeSearch,
    HomeSwiper,
    HomeGoods
  }
}
</script>
<style lang="scss" scoped>
.home__header {
  @include horVerCenter;

  height: 71px;

  .iconfont {
    font-size: 40px;
  }
}
</style>
