<template>
  <div class="cart">

    <div class="cart__content">
      <VanSwipeCell
        v-for="(item, index) in list"
        :key="index">
        <VanCard
          num="1"
          :price="item._goods.goods_price"
          :desc="item._goods.goods_intro"
          :title="item._goods.goods_name"
          :thumb="item._goods.goods_carousel[0]">
        </VanCard>
        <template #right>
          <VanButton
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="handleRemoveGoods(item)" />
        </template>
      </VanSwipeCell>
    </div>

    <VanSubmitBar
      :price="totalPrice * 100"
      button-text="提交订单"
      @submit="handleSubmit">
      <!-- <template #tip>
        您还未填写收获地址,
        <span style="color: #1989fa;" @click="onClickEditAddress">添加地址</span>
      </template> -->
    </VanSubmitBar>

  </div>
</template>
<script>
export default {
  data () {
    return {
      list: []
    }
  },
  computed: {
    totalPrice () {
      return this.list.reduce((total, current) => total + current._goods.goods_price, 0)
    }
  },
  created () {
    this.queryShopCart()
  },
  methods: {
    /**
     * @description 获取购物车
     */
    async queryShopCart () {
      const data = await this.$apis.uAction.queryShopCart('5ea7d1d34f994834d085c331')
      this.list = data
    },
    /**
     * @description 提交订单
     */
    async handleSubmit () {
      await this.$apis.order.create({
        _user: '5ea7d1d34f994834d085c331',
        goods_list: this.list.map(v => v._goods)
      })
      this.$toast('提交成功')
    },
    /**
     * @description 删除商品
     */
    handleRemoveGoods (item) {
      this.$apis.uAction.removeShopCart(item._id).then(() => {
        this.$toast('删除成功')
        this.queryShopCart()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.cart {
  padding-bottom: 100px;

  /deep/ .van-cell {
    padding: 0;
  }

  /deep/ .van-cell:not(:last-child)::after {
    left: 0;
  }

  /deep/ .van-swipe-cell__right {
    .van-button {
      height: 100%;
    }
  }

  /deep/ .van-submit-bar {
    bottom: 100px;
  }

  /deep/ .van-radio {
    background-color: #fafafa;
  }

  /deep/ .van-radio__icon {
    padding-left: 40px;
  }

  /deep/ .van-radio__label {
    width: 100%;
  }
}

.cart__content {
  padding-bottom: 168px;
}
</style>
