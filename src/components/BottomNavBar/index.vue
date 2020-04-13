<template>
  <div class="bottom-nav-bar">
    <div class="nav-item active">
      <figure class="iconfont iconhome1"></figure>
      <span>首页</span>
    </div>
    <div class="nav-item">
      <figure class="iconfont iconfenlei"></figure>
      <span>分类</span>
    </div>
    <div class="nav-item">
      <figure class="iconfont icongouwuche"></figure>
      <span>购物车</span>
    </div>
    <div class="nav-item">
      <figure class="iconfont icongerenzhongxin"></figure>
      <span>个人中心</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bottom-nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  width: 100%;
  height: 113px;
  padding: 0 70px;
  background-color: #fff;
  box-shadow: 0 -11px 32px rgba(0, 0, 0, 0.08);
}

.nav-item {
  @include horVerCenter;

  flex-direction: column;
  flex: 1;
  justify-content: center;
  color: #9a9a9a;

  &.active {
    color: #d44d44;
  }

  .iconfont {
    font-size: 40px;
  }

  span {
    padding-top: 10px;
    font-size: 20px;
  }
}
</style>
