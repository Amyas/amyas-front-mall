<template>
  <div class="categroy">
    <div class="categroy-content">
      <div class="categroy-left">
        <div class="categroy-left__list">
          <div
            v-for="(item) in 100"
            :key="item"
            class="categroy-left__item active">手机数码</div>
        </div>
      </div>
      <div class="categroy-right">
        <div class="categroy-right__content">
          <CategoryItem v-for="(item, index) in 4" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryItem from './components/CategoryItem'
export default {
  components: {
    CategoryItem
  }
}
</script>
<style lang="scss" scoped>
.categroy {
  height: 100%;
  padding-bottom: 120px;
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
  padding: 57px 13px 0 13px;
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: 1px 0 0 hsla(0, 0%, 40%, 0.1);
}

.categroy-left__list {
  text-align: center;
}

.categroy-left__item {
  color: rgba(0, 0, 0, 0.6);
  font-size: 25px;
  margin-bottom: 36px;
  padding: 7px 17px 6px;

  &.active {
    color: #d44d44;
    background: #f6ebea;
    border-radius: 9px;
  }
}

.categroy-right {
  height: 100%;
  padding-left: 167px;
  overflow-x: hidden;
  overflow-y: auto;
}

.categroy-right__content {
}
</style>
