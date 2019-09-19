import axios from 'axios'

export default {
  get() {
    return axios.get(
      'http://datacenter.taichung.gov.tw/swagger/OpenData/e409ced6-ed43-4cd7-b082-ed56351ceae4'
    )
  }
}
