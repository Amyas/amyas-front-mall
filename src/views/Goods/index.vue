<template>
  <div>
    <VanSwipe
      class="home-swiper"
      :autoplay="3000"
      indicator-color="white">
      <VanSwipeItem
        v-for="(image, index) in goods.goods_carousel"
        :key="index">
        <VanImage :src="image">
          <template v-slot:loading>
            <VanLoading type="spinner" size="20" />
          </template>
        </VanImage>
      </VanSwipeItem>
    </VanSwipe>
    <section
      class="goods-info">
      <p class="goods-name">{{ goods.goods_name }}</p>
      <span class="goods-price">￥198</span>
    </section>
    <p>{{ goods.goods_detail }}</p>
    <VanGoodsAction>
      <VanGoodsActionIcon
        icon="home-o"
        text="首页"
        @click="$router.replace('/')" />
      <VanGoodsActionIcon
        icon="cart-o"
        text="购物车"
        @click="$router.push({name: 'Cart'})" />
      <VanGoodsActionButton
        type="warning"
        text="加入购物车"
        @click="handleAddToShopCart" />
      <VanGoodsActionButton type="danger" text="立即购买" />
    </VanGoodsAction>
  </div>
</template>
<script>
export default {
  data () {
    return {
      goods: {
        goods_carousel: []
      }
    }
  },
  async created () {
    const goods = await this.$apis.goods.list({
      _id: this.$route.params.id
    })
    this.goods = goods.items[0]
  },
  methods: {
    /**
     * @description 加入购物车
     */
    async handleAddToShopCart () {
      await this.$apis.uAction.addToShopCart({
        _user: '5ea7d1d34f994834d085c331', // wjp
        _goods: this.$route.params.id
      })
      this.$toast('加入成功')
    }
  }
}
</script>

<style lang="scss" scoped>
.home-swiper {
  height: 750px;

  .van-image {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}

.goods-info {
  padding: 20px 30px;
  font-size: 32px;

  p {
    margin: 0;
  }

  span {
    color: #b532e9;
  }
}
</style>
