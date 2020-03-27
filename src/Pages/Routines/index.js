import React from 'react'
import { Link } from 'react-router-dom'

import ErrorHandler, { errorHandler } from '../../components/ErrorHandler'
import request from '../../request.js'
const Routines = () => {
  const [categories, setCategories] = React.useState([])
  const [error, setError] = React.useState({})

  const retry = () => setError({})

  React.useEffect(() => request('get', 'routine-categories', setCategories, setError), [error])

  return (
    <div>
      <div className='orange'>LISTA DE PRÁTICAS</div>
      {error.isAxiosError?
        <ErrorHandler tryagainTime={5} onTryAgain={retry}/>
        :
        categories.length === 0 ?
          <div>Buscando práticas...</div>
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
