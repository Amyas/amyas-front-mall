<template>
  <VanCellGroup>
    <VanCell title="订单管理" is-link />
    <VanGrid :column-num="5">
      <VanGridItem icon="balance-pay" text="待付款" />
      <VanGridItem icon="logistics" text="待发货" />
      <VanGridItem icon="points" text="待收货" />
      <VanGridItem icon="like-o" text="已完成" />
      <VanGridItem icon="good-job-o" text="评价" />
    </VanGrid>
  </VanCellGroup>
</template>
