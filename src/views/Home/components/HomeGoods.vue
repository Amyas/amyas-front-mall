<template>
  <div class="home-goods">
    <div class="home-goods__title">推荐商品</div>
    <div class="home-goods__list">
      <div class="home-goods__item">
        <div class="item__cover">
          <img src="https://resource.smartisan.com/resource/24c6437342c9ea969e13f00b82f7e3e5.png?x-oss-process=image/resize,w_344/format,webp" alt="">
        </div>
        <div class="item__title">
          <span>Smartisan T恤 红白机</span>
        </div>
        <div class="item__info">
          <div class="item__info__price">
            <span class="yuan">¥</span>
            <span>139</span>
          </div>
        </div>
      </div>
      <div class="home-goods__item">
        <div class="item__cover">
          <img src="https://resource.smartisan.com/resource/24c6437342c9ea969e13f00b82f7e3e5.png?x-oss-process=image/resize,w_344/format,webp" alt="">
        </div>
        <div class="item__title">
          <span>Smartisan T恤 红白机</span>
        </div>
        <div class="item__info">
          <div class="item__info__price">
            <span class="yuan">¥</span>
            <span>139</span>
          </div>
        </div>
      </div>
      <div class="home-goods__item">
        <div class="item__cover">
          <img src="https://resource.smartisan.com/resource/24c6437342c9ea969e13f00b82f7e3e5.png?x-oss-process=image/resize,w_344/format,webp" alt="">
        </div>
        <div class="item__title">
          <span>Smartisan T恤 红白机</span>
        </div>
        <div class="item__info">
          <div class="item__info__price">
            <span class="yuan">¥</span>
            <span>139</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home-goods {
  padding: 0 25px;
}

.home-goods__title {
  padding: 0 0 29px 18px;
  font-size: 33px;
  font-weight: 700;
}

.home-goods__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.home-goods__item {
  width: 49%;

  .item__cover {
    height: 344px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 0.02rem 0.2rem rgba(0, 0, 0, 0.06);
    background-color: rgba(0, 0, 0, 0.01);

    img {
      width: 100%;
      height: 100%;
      mix-blend-mode: multiply;
    }
  }

  .item__title {
    margin: 13px 0 5px;
    padding: 0 13px;

    span {
      display: block;
      width: 100%;
      font-size: 28px;
      font-weight: 600;

      @include ellipsis;
    }
  }

  .item__info {
    padding: 0 13px;

    .item__info__price {
      display: block;
      font-size: 30px;
      font-weight: bolder;
      color: #d44d44;
    }
  }
}
</style>
