import axios from 'axios'
import { databaseRoute } from './database.js'
const request = (path, handleData, handleError) => {
  axios
  .get(databaseRoute(path))
  .then( response => {
    const { data } = response
    handleData(data)
  })
  .catch( error => {
    handleError(error)
  })
}

export default request
