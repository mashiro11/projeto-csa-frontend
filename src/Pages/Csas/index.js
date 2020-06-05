import React from 'react'
import { Link } from 'react-router-dom'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import DownArrowIcon from '../../icons/DownArrow'
import RadioButton from '../../components/RadioButton'
import Checkbox from '../../components/Checkbox'


import LayoutContext from '../../LayoutContext'
import request from '../../request.js'

import ErrorHandler from '../../components/ErrorHandler'
import Filters from '../../components/Filters'
import CsaListItem from '../../components/CsaListItem'
import styles from './styles.js'
import './index.css'

const Csas = () => {
  const layout = React.useContext(LayoutContext)
  const [state, setState] = React.useState({})
  const [error, setError] = React.useState({})
  const [viewType, setViewType] = React.useState('csan')
  const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

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
  return (
    <div style={styles.contentContainer(layout)}>

      {layout === 'MOBILE' ?
        <div>Filtros</div>
        :
        <div>
          {/*<Filters />*/}
          <div>Ordenar por:</div>
          <RadioButton check={ viewType === 'csan'} onClick={()=> setViewType('csan')} label='NOME'/>
          <RadioButton check={ viewType === 'conv'} onClick={()=> setViewType('conv')} label='CONV'/>
          <RadioButton check={ viewType === 'prod'} onClick={()=> setViewType('prod')} label='PROD'/>
          {viewType === 'conv' ?
            <div>
              <div>Dia do ponto de convivência:</div>
              {diasDaSemana.map((dia, index)=>
                <Checkbox label={dia} key={index}/>
              )}
            </div>
          : viewType === 'prod'?
            <div>
              <div>Tipo de produção:</div>
              {csas.reduce((resultList, csa) => {
                  let l = []
                  csa.production_types.map((productionType) => {
                    if(!resultList.includes(productionType.name))
                    l = [...l, productionType.name]
                  })
                  return [...resultList, ...l]
                }
                ,[]).map( (productionTypeName, index) =>
                  <Checkbox key={index} label={productionTypeName} />
                )
              }
            </div>
          :null
          }
        </div>
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
            {viewType === 'csan' ?
              csas ?
                csas.map((csa, i) => <CsaListItem csa={csa} key={i}/> )
                : <div>Buscando dados...</div>
            :viewType === 'conv' ?
                <div>not yet</div>
            :viewType === 'prod' ?
              regions ? regions.map((region, index) =>
                <ExpansionPanel key={index}>
                  <ExpansionPanelSummary
                    style={{backgroundColor: '#E0E0E0'}}
                    expandIcon={<DownArrowIcon />}
                  >
                    {region.name}
                  </ExpansionPanelSummary>


                  <ExpansionPanelDetails>
                    {csas.filter((csa, i) => csa.region.name === region.name)
                         .map((csa, i) =>
                        <CsaListItem key={i} csa={csa} />
                    )}
                  </ExpansionPanelDetails>


                </ExpansionPanel>
              ) : <div>Buscando dados...</div>
            :null
            }
          </div>
        }
      </div>
    </div>
  )
}

export default Csas
