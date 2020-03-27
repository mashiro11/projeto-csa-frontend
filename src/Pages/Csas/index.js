import React from 'react'
import { Link } from 'react-router-dom'

import LayoutContext from '../../LayoutContext'
import request from '../../request.js'

import ErrorHandler from '../../components/ErrorHandler'
import Filters from '../../components/Filters'
import CsaListItem from '../../components/CsaListItem'

const Csas = () => {
  const layout = React.useContext(LayoutContext)
  const [csas, setCsas] = React.useState([])
  const [error, setError] = React.useState({})

  const retry = () => setError({})

  const handleError = (err) => {
    if(!error.isAxiosError) setError(err)
  }

  React.useEffect(() => request('get', 'csas', setCsas, handleError), [error])

  return (
    <div>
      {layout === 'MOBILE' ?
        <div>Filtros</div>
        :
        <Filters />
      }
      {error.isAxiosError ?
        <ErrorHandler tryagainTime={5} onTryAgain={retry} />
        :
        <div>
          LISTA DE CSAS:
          {!csas.length ?
            <div> Buscando CSAs...
            </div>
          :null}
          <div>
            {csas.map( (csa, index) =>
              <CsaListItem csa={csa} />
            )}
          </div>
        </div>
      }
    </div>
  )
}

export default Csas
