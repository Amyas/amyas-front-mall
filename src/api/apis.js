import service from './service'

export default {
  category: {
    list: params => service.get('/goods-cate', { params })
  },
  goods: {
    list: params => service.get('/goods', { params })
  },
  uAction: {
    addToShopCart: data => service.post('/u-action/add-shop-cart', data)
  }
}
