
import axios from 'axios'

const authApi = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
  params:{
    key: 'AIzaSyDWecFZo5zXFgCSCzdJh72HVTnc7TJWClo'
  }
})
export default authApi