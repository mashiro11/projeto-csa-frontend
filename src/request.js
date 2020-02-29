import axios from 'axios'
import { databaseRoute } from './database.js'
const request = (method, path, handleData, handleError, payload, headers) => {
  axios({
    method: method,
    url: databaseRoute(path),
    data: payload,
    headers: headers
  })
  .then( response => {
    const { data } = response
    handleData(data)
  })
  .catch( error => {
    handleError(error)
  })
}

export default request
