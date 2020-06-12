import service from './service'

export default {
  category: {
    list: params => service.get('/goods-cate', { params })
  },
  goods: {
    list: params => service.get('/goods', { params })
  },
  uAction: {
    addToShopCart: data => service.post('/u-action/add-shop-cart', data),
    queryShopCart: (id, params) => service.get('/u-action/query-shop-cart/' + id, { params }),
    removeShopCart: (id, data) => service.put('/u-action/remove-shop-cart/' + id, data)
  }
}
