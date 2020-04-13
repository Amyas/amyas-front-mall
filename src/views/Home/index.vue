<template>
  <div class="home">
    <!-- 头部 -->
    <div class="home__header">
      <figure class="iconfont iconchuizi"></figure>
    </div>

    <!-- 搜索 -->
    <HomeSearch />

    <div class="home__container" style="height: 2000px;"></div>
  </div>
</template>
<script>
import HomeSearch from './components/HomeSearch'
export default {
  components: {
    HomeSearch
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
