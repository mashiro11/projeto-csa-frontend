import axios from 'axios'
import { databaseRoute } from './database.js'

const cookieToObj = (cookieString) => {
  let temp = cookieString.split(';')
  let fields = temp.map(field => field.split('='))
  return fields.reduce( (obj, field) => {return { ...obj, [field[0].trim(' ')]: field[1] }}, {} )
}
const request = (method, path, handleData, handleError, payload, useHeaders) => {
  axios({
    method: method,
    url: databaseRoute(path),
    data: payload,
    headers: useHeaders ?
      {
        Authorization: `Bearer ${cookieToObj(document.cookie).jwt}`
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
