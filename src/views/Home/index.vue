<template>
  <div class="home">

    <!-- 搜索 -->
    <VanSearch placeholder="请输入搜索关键词" />

    <!-- 轮播 -->
    <HomeSwiper />

    <!-- 分类 -->
    <HomeCategory />

    <!-- 热卖商品 -->
    <HomeGoods />

  </div>
</template>
<script>
import HomeSwiper from './components/HomeSwiper'
import HomeCategory from './components/HomeCategory'
import HomeGoods from './components/HomeGoods'
export default {
  components: {
    HomeSwiper,
    HomeCategory,
    HomeGoods
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 100px;
}
</style>
