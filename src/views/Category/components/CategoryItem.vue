<template>
  <div class="category-item">
    <div class="category-item__title">数码配件</div>
    <div class="category-item__list">
      <div
        v-for="(item) in 6"
        :key="item"
        class="category-item__list__item">
        <div class="item__cover">
          <img src="https://resource.smartisan.com/resource/8e822aa7cbab24fec7eacf0bbb2f6526.jpg?x-oss-process=image/resize,w_188/format,webp" alt="">
        </div>
        <div class="item__title">线材</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.category-item {
  box-shadow: 0 1px 0 hsla(0, 0%, 40%, 0.1);
  padding-bottom: 20px;
}

.category-item__title {
  color: rgba(0, 0, 0, 0.8);
  font-size: 34px;
  font-weight: 700;
  line-height: 115px;
  margin-left: 42px;
}

.category-item__list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 17px;
}

.category-item__list__item {
  width: 33.33%;
  padding: 0 7px;

  &:nth-child(n+4) {
    margin-top: 34px;
  }

  .item__cover {
    height: 171px;
    border-radius: 17px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.03);

    img {
      width: 100%;
      height: 100%;
      mix-blend-mode: multiply;
    }
  }

  .item__title {
    color: #333;
    text-align: center;
    font-size: 21px;
    font-weight: 700;
    margin-top: 10px;
  }
}
</style>
