import axios from 'axios'
import { Toast } from 'vant'

const service = axios.create({
  baseURL: '/api',
  timeout: 10000,
  withCredentials: true
})

service.interceptors.response.use(response => {
  const { data: { data, status: { errCode, message } } } = response
  if (errCode !== -1) {
    Toast(message)
    return Promise.reject(response)
  }
  return data
}, error => {
  return Promise.reject(error)
})

export default service

export const uploadFileApi = (url, data) => {
  return service.post(url, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    transformRequest: [function (data, headers) {
      // Do whatever you want to transform the data
      const fd = new FormData()
      for (const item in data) {
        fd.append(item, data[item])
      }
      return fd
    }]
  })
}
