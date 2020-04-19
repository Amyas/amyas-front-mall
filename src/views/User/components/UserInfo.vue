<template>
  <div class="user-info">
    <img
      class="user-info__avatar"
      src="http://img4.imgtn.bdimg.com/it/u=198369807,133263955&amp;fm=27&amp;gp=0.jpg">
    <p>欢迎您：1340000100</p>
    <p>退出登录</p>
    <VanIcon
      class="user-info__setting"
      name="setting"
      size="50" />
  </div>
</template>
<style lang="scss" scoped>
.user-info {
  position: relative;
  font-size: 28px;
  color: #fff;
  text-align: center;
  background-color: #38f;
  padding: 40px 0;
}

.user-info__avatar {
  width: 128px;
  height: 128px;
  border-radius: 50%;
}

.user-info__setting {
  position: absolute;
  right: 40px;
  top: 40px;
}
</style>
