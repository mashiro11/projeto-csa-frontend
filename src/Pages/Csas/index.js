import React, { useState, useEffect } from 'react'
import request from '../../request.js'

const Csas = () => {
  const [csas, setCsas] = useState([])

  const handleError = (error) => {
    console.log('Ops:', error)
  }

  useEffect(() => request('csas', setCsas, handleError), [])

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
