<template>
  <div class="cart">

    <div class="cart__content">
      <VanRadioGroup v-model="radio">
        <VanRadio
          name="1"
          v-for="(item, index) in 10"
          :key="index">
          <VanCell>
            <VanSwipeCell>

              <VanCard
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
                <template #num>
                  <VanStepper v-model="value" disable-input />
                </template>
              </VanCard>

              <template #right>
                <VanButton
                  square
                  text="删除"
                  type="danger"
                  class="delete-button" />
              </template>

            </VanSwipeCell>
          </VanCell>
        </VanRadio>
      </VanRadioGroup>
    </div>

    <VanSubmitBar
      :price="3050"
      button-text="提交订单"
      @submit="onSubmit">
      <VanCheckbox v-model="checked">全选</VanCheckbox>
      <template #tip>
        您还未填写收获地址,
        <span style="color: #1989fa;" @click="onClickEditAddress">添加地址</span>
      </template>
    </VanSubmitBar>

  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '',
      checked: false,
      radio: ''
    }
  },
  methods: {
    onSubmit () {
    },
    onClickEditAddress () {

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
