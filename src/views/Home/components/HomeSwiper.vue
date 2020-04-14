<template>
  <VanSwipe
    class="home-swiper"
    :autoplay="3000"
    indicator-color="white">
    <VanSwipeItem
      v-for="(image, index) in images"
      :key="index">
      <VanImage :src="image">
        <template v-slot:loading>
          <VanLoading type="spinner" size="20" />
        </template>
      </VanImage>
    </VanSwipeItem>
  </VanSwipe>
</template>
<script>
export default {
  data () {
    return {
      images: [
        'http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175040_1780.jpg',
        'http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175111_9509.jpg'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.home-swiper {
  height: 400px;

  .van-image {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
