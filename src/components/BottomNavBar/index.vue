<template>
  <div class="bottom-nav-bar">
    <VanTabbar>
      <VanTabbarItem icon="home-o">标签</VanTabbarItem>
      <VanTabbarItem icon="search">标签</VanTabbarItem>
      <VanTabbarItem icon="friends-o">标签</VanTabbarItem>
      <VanTabbarItem icon="setting-o">标签</VanTabbarItem>
    </VanTabbar>
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
  background-color: #fff;
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
