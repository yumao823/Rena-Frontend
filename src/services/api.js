import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://localhost:9090/v1/api'
  baseURL: 'http://3.140.253.148/api'
})
api.defaults.headers.post['Content-Type'] = 'application/json'
api.defaults.timeout = 50000

const jsonPinata = axios.create({
  baseURL: 'https://api.pinata.cloud'
})
jsonPinata.defaults.headers.common['pinata_api_key'] =
  process.env.REACT_APP_PINATA_API_KEY
jsonPinata.defaults.headers.common['pinata_secret_api_key'] =
  process.env.REACT_APP_PINATA_API_SECRET

const filePinata = axios.create({
  baseURL: 'https://api.pinata.cloud'
})
filePinata.defaults.headers.common['pinata_api_key'] =
  process.env.REACT_APP_PINATA_API_KEY
filePinata.defaults.headers.common['pinata_secret_api_key'] =
  process.env.REACT_APP_PINATA_API_SECRET
filePinata.defaults.maxBodyLength = 'Infinity'

const fetchItems = (options) => api.get(`/items?${options}`)
const postItem = (payload) => api.post('/items', payload)
const fetchCollections = (options) => api.get(`/collections?${options}`)
const postCollection = (payload) => api.post('/collections', payload)
const postJSONtoPinata = (payload) =>
  jsonPinata.post('/pinning/pinJSONToIPFS', payload)
const postFiletoPinata = (payload) => {
  filePinata.defaults.headers.post[
    'Content-Type'
  ] = `multipart/form-data; boundary=${payload._boundary}`
  return filePinata.post('/pinning/pinFileToIPFS', payload)
}

export {
  fetchItems,
  postItem,
  fetchCollections,
  postCollection,
  postJSONtoPinata,
  postFiletoPinata
}
