import React from 'react'
import { Link } from 'react-router-dom'

import request from '../../request.js'
const Routines = () => {
  const [categories, setCategories] = React.useState([])
  const [error, setError] = React.useState({})
  const handleError = (error) => {
    console.log('error:', error)
    console.log('errorKeys:', Object.keys(error))
    console.log('errorKeys:', Object.values(error))
    setError(error)
  }

  React.useEffect(() => request('get', 'routine-categories', setCategories, handleError), [])

  return (
    <div>
      <div className='orange' >LISTA DE PRÁTICAS</div>
      {error.response?
        <div>{error.response}</div>
        :
        categories.length === 0 ?
          <div>Fetching data...</div>
          :
          categories.map( (category, index) =>
            <div key={index}>
              <div style={{backgroundColor: '#E0E0E0'}}>{category.name}</div>
              {category.routines.map(( routine, i )=>
                <div key={i}>
                  <Link to={`rotinas/rotina/${routine.id}`} >{routine.name}</Link>
                </div>
              )}
            </div>
          )
      }
    </div>

  )
}
export default Routines
