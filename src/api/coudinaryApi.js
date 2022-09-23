import axios from 'axios'

const cloudinaryApi = axios.create({
  baseURL: "https://api.cloudinary.com/v1_1/ddnatsso7/image",

})

export default cloudinaryApi