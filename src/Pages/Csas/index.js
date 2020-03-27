import React from 'react'
import { Link } from 'react-router-dom'
import request from '../../request.js'

import ErrorHandler from '../../components/ErrorHandler'

const Csas = () => {
  const [csas, setCsas] = React.useState([])
  const [error, setError] = React.useState({})

  const retry = () => setError({})

  React.useEffect(() => request('get', 'csas', setCsas, setError), [error])

  return (
    <div>
      {error.isAxiosError ?
        <ErrorHandler tryagainTime={5} onTryAgain={retry} />
        :
        <div>
          CSAs:
          {!csas.length ?
            <div> Buscando CSAs...
            </div>
          :null}

          {csas.map( (item, index) =>
            <div key={index}>
              <Link to={`csas/csa/${item.id}`}>{item.nome}</Link>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default Csas
