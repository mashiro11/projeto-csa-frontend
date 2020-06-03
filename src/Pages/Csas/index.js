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
  const [state, setState] = React.useState({})
  const [error, setError] = React.useState({})

  const retry = () => setError({})

  const handleError = (err) => {
    if(!error.isAxiosError) setError(err)
  }

  const getData = (csasData) => {
    setState({
      csas: csasData,
      regions: csasData.reduce( (regionsList, csa ) => [...regionsList, csa.region], [])
    })
  }

  React.useEffect(() => request('get', 'csas', getData, handleError), [error])
  const { csas, regions } = state
  console.log('state:', state)
  return (
    <div style={styles.contentContainer(layout)}>

      {layout === 'MOBILE' ?
        <div>Filtros</div>
        :
        <Filters />
      }
      <div style={ layout === 'DESKTOP' ? {flexGrow: 2, marginLeft: 30} : null}>
        <div className='onExtremes'>
          <h3>LISTA DE CSAs</h3>
        </div>
        <hr style={{marginTop: 0}}/>
        {error.isAxiosError ?
          <ErrorHandler tryagainTime={5} onTryAgain={retry} />
          :
          <div>
            {regions && regions.map((region, index) =>
              <div key={index}>
                <div>{region.name}</div>
                {csas.filter((csa, i) => csa.region === region)
                     .map((csa, i) =>
                  <div key={i}>{csa.nome}</div>
                )}
              </div>
            )}
          </div>
        }
      </div>


    </div>
  )
}

export default Csas
