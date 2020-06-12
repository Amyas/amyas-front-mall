import service from './service'

export default {
  category: {
    list: params => service.get('/goods-cate', { params })
  },
  goods: {
    list: params => service.get('/goods', { params })
  }
}
