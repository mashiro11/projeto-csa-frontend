import React from 'react'
import { Link } from 'react-router-dom'

import LayoutContext from '../../LayoutContext'
import request from '../../request.js'

import ErrorHandler from '../../components/ErrorHandler'
import Filters from '../../components/Filters'
import CsaListItem from '../../components/CsaListItem'
import styles from './styles.js'

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
    <div style={styles.contentContainer(layout)}>
      {layout === 'MOBILE' ?
        <div>Filtros</div>
        :
        <Filters />
      }
      {error.isAxiosError ?
        <ErrorHandler tryagainTime={5} onTryAgain={retry} />
        :
        <div>
          <div className='onExtremes'>
            <h3>LISTA DE CONVERSAS</h3>
          </div>
          <hr style={{marginTop: 0}}/>
        </div>
      }
    </div>
  )
}

export default Csas
