<template>
  <div class="home-swiper">
    <Swiper
      ref="homeSwiper"
      class="home-swiper__container"
      :options="swiperOptions">
      <SwiperSlide>
        <div class="swiper__content">
          <img
            class="swiper__content__img"
            src="https://resource.smartisan.com/resource/a69930eeb4f076e8350ae0d25bec300d.png?x-oss-process=image/resize,w_750/format,webp"
            alt="">
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper__content">
          <img
            class="swiper__content__img"
            src="https://resource.smartisan.com/resource/a69930eeb4f076e8350ae0d25bec300d.png?x-oss-process=image/resize,w_750/format,webp"
            alt="">
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper__content">
          <img
            class="swiper__content__img"
            src="https://resource.smartisan.com/resource/a69930eeb4f076e8350ae0d25bec300d.png?x-oss-process=image/resize,w_750/format,webp"
            alt="">
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper__content">
          <img
            class="swiper__content__img"
            src="https://resource.smartisan.com/resource/a69930eeb4f076e8350ae0d25bec300d.png?x-oss-process=image/resize,w_750/format,webp"
            alt="">
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper__content">
          <img
            class="swiper__content__img"
            src="https://resource.smartisan.com/resource/a69930eeb4f076e8350ae0d25bec300d.png?x-oss-process=image/resize,w_750/format,webp"
            alt="">
        </div>
      </SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOptions: {
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home-swiper {
  height: 350px;
  margin-top: 17px;
  margin-bottom: 33px;
}

.home-swiper__container {
  width: 100%;
  height: 350px;
}

.swiper__content {
  padding: 0 25px;

  img {
    width: 100%;
  }
}

</style>
