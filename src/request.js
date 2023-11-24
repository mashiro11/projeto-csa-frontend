import axios from 'axios'
import { databaseRoute } from './database.js'

const cookieToObj = (cookieString) => {
  let temp = cookieString.split(';')
  let fields = temp.map(field => field.split('='))
  return fields.reduce( (obj, field) => {return { ...obj, [field[0].trim(' ')]: field[1] }}, {} )
}

const simplify = (rawData) => {
  console.log('rawData', JSON.stringify(rawData))
  if(!rawData)
    return rawData
  
  let simplified
  if(typeof(rawData) !== 'object'){
    //console.log('rawData', rawData, 'is not an object!')
    simplified = rawData
  }
  else{
    console.log('rawData is an object')
    const containsDataKey = Object.keys(rawData).includes('data')
    if(containsDataKey){
      console.log('rawData contains data')
      if( Array.isArray(rawData.data) ){
        //console.log('rawData.data is array')
        simplified = rawData.data.map( (element, index) => {/*console.log('simplify',index,'element');*/ return simplify(element)} )
      }
      else {
        console.log('rawData.data is an object')
        if(rawData.data === null)
          return null
        else
          simplified = simplify(rawData.data)
        
        if(rawData.attributes){
            console.log('rawData contains attributes', JSON.stringify( Object.keys(rawData.attributes)) )
            simplified = simplify(rawData.attributes)
            simplified.id = rawData.id
        }
      }
    }else{
      if(rawData.attributes){
        console.log('rawData contains attributes', JSON.stringify( Object.keys(rawData.attributes)) )
        simplified = simplify(rawData.attributes)
        simplified.id = rawData.id
      }else{
        //console.log('rawData does not contain data')
        const keys = Object.keys(rawData)
        //console.log('keys:', keys)
        for(let i = 0; i < keys.length; i++){
          console.log('key', JSON.stringify(keys[i]) )
          rawData[keys[i]] = simplify(rawData[keys[i]])
        }
        simplified = rawData
      }
    }
  }

  //console.log('simplified', simplified)
  return simplified
}
/**
 * 
 * @param {string} method http method 
 * @param {string} path api route
 * @param {function} handleData success callback 
 * @param {function} handleError error callback 
 * @param {object} payload any data that must be sent to server 
 * @param {boolean} useHeaders wheter or not send authorization token 
 * @param {string} populate string determining which relations to populate from main object 
 */

const request = (method, path, handleData, handleError, payload, useHeaders, populate = "") => {
  console.log('request:', method, path, payload)
  axios({
    method: method,
    url: databaseRoute(path + populate),
    data: payload,
    headers: useHeaders ?
      {
        Authorization: `Bearer ${cookieToObj(document.cookie).jwt}`
      } : null
  })
  .then( response => {
    console.log('response:', JSON.stringify(response.data.data, null, 2))
    console.log('response.data', response.data.data)
    handleData( simplify(response.data) )
  })
  .catch( error => {
    console.log('error:', error)
    handleError(error)
  })
}

export default request
