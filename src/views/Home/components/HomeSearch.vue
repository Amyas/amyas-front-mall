<template>
  <div class="home-search">
    <div class="home-search__content">
      <figure class="iconfont iconsousuo"></figure>
      <span>请输入搜索关键字</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home-search {
  position: sticky;
  left: 0;
  top: 0;
  padding: 17px;
  z-index: 10;
  background-color: #fff;
}

.home-search__content {
  display: flex;
  align-items: center;
  height: 62px;
  color: #b3b3b3;
  border-radius: 65px;
  padding-left: 20px;
  background-color: #f5f5f5;
  font-size: 25px;

  .iconfont {
    font-size: 25px;
  }

  span {
    margin-left: 17px;
  }
}
</style>
