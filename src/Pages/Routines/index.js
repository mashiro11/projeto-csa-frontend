import React from 'react'
import { Link } from 'react-router-dom'

import ErrorHandler from '../../components/ErrorHandler'
import Banner from '../../components/Banner'
import bannerImg from './praticas.jpg'

import request from '../../request.js'
const Routines = () => {
  const [categories, setCategories] = React.useState([])
  const [error, setError] = React.useState({})

  const handleError = (err) => {
    if(!error.isAxiosError) setError(err)
  }

  const retry = () => setError({})

  React.useEffect(() => request('get', 'routine-categories', setCategories, handleError), [error])

  return (
    <div>
      <Banner title='PRÁTICAS' image={bannerImg} />
      <div style={{position: 'relative'}}>
        <div className='centeredH' style={{position: 'relative', width: 700}}>
          <div>LISTA DE PRÁTICAS</div>
          <hr/>
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
                      <hr/>
                    </div>
                  )}
                </div>
              )
          }
        </div>
      </div>
    </div>

  )
}
export default Routines
