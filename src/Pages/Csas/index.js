import React, { useState, useEffect } from 'react'
import request from '../../request.js'

const Csas = () => {
  const [csas, setCsas] = useState([])
  const [error, setError] = useState({})

  useEffect(() => {
    console.log('called')
    request('csas', setCsas, setError)
  }, [])

  return (
    <div>
      CSAs:
      {!csas.length ?
        <div> Fetching data...
        </div>
      :null}
      
      {csas.map( (item, index) =>
        <div key={index}>
          {item.nome}
        </div>
      )}
    </div>
  )
}
export default Csas
