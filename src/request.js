import axios from 'axios'
import { databaseRoute } from './database.js'
const request = (method, path, handleData, handleError, payload, useHeaders) => {
  let token = document.cookie.substring(document.cookie.indexOf('=')+1, document.cookie.indexOf(';'))
  console.log("token:", token)
  axios({
    method: method,
    url: databaseRoute(path),
    data: payload,
    headers: useHeaders ?
      {
        Authorization: `Bearer ${token}`
      } : null
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
