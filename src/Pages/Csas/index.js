import React from 'react'
//import { Link } from 'react-router-dom'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import DownArrowIcon from '../../icons/DownArrow'
import RadioButton from '../../components/RadioButton'
import Checkbox from '../../components/Checkbox'


import LayoutContext from '../../LayoutContext'
import request from '../../request.js'

import ErrorHandler from '../../components/ErrorHandler'
//import Filters from '../../components/Filters'
import CsaListItem from '../../components/CsaListItem'
import styles from './styles.js'
import './index.css'

import { createPopulateStringFromArray } from 'utils'

const getConvRegionList = (csas) => csas.reduce((regionsList, csa ) =>
  csa.meeting_points.reduce(
      (rList, meetingPoint) =>  meetingPoint.region && !rList.includes(meetingPoint.region.Name) ?
          [...rList, meetingPoint.region.Name] :
          rList,
      regionsList
    ),
  [])
const getProdRegionList = (csas) => csas.reduce( (regionsList, csa ) => (csa.region? [...regionsList, csa.region.Name] : regionsList), [])

const getProdTypes = (csas) => {
  return csas.reduce((resultList, csa) => {
    if(!csa.production_types) return resultList;
    let l = []
    csa.production_types.map((productionType) => {
      if(!resultList.includes(productionType.Name))
      l = [...l, productionType.Name]
    })
    return [...resultList, ...l]
  }
  ,[])
}

const Csas = () => {
  const layout = React.useContext(LayoutContext)
  const [state, setState] = React.useState({weekDay: new Array(7).fill(true)})
  const [selectedProdTypes, setSelectedProdTypes] = React.useState([])
  const [error, setError] = React.useState({})
  const [viewType, setViewType] = React.useState('csan')
  const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
  const populate = [
    "meeting_points",
    "meeting_points.region",
    "region",
    "meeting_points.csasWeektimeFrame",
    "meeting_points.csasWeektimeFrame.weekSchedule",
    "meeting_points.csasWeektimeFrame.csa",
    "production_types"
  ]
  const retry = () => setError({})

  const handleError = (err) => {
    if(!error.isAxiosError) setError(err)
  }

  const getData = (csasData) => {
    console.log('csasData:', csasData)
    const prodTypes = getProdTypes(csasData)
    const selectedProdTypes = new Array(prodTypes.length).fill(true)

    setState({
      ...state,
      csas:         csasData,
      convRegions:  getConvRegionList(csasData),
      prodRegions:  getProdRegionList(csasData),
      prodTypes: prodTypes,
      selectedProdTypes
    })
  }

  
  
  React.useEffect(() => request('get', 'csas', getData, handleError, null, null, createPopulateStringFromArray(populate) ), [error])
  const { csas, convRegions, prodRegions, prodTypes } = state
  console.log('csas', csas)
  console.log('convRegions:', convRegions)
  console.log('prodRegions:', prodRegions)
  
  const filterCSAs = ({meetingRegionName, weekDay, regionName, prodType}) => {
    let filteredCsas = [...csas]
    
    if(meetingRegionName)
      filteredCsas = filteredCsas.filter( csa => csa.meeting_points.find(mp => mp.region.Name === meetingRegionName));
    
    if(weekDay)
      filteredCsas = filteredCsas.filter(csa => {
        if(!csa.meeting_points)
          return false

        const meetingHour = csa.meeting_points.find( mp => mp.csasWeektimeFrame.find(weekDayTime => 
          weekDayTime.csa.Name === csa.Name && weekDayTime.weekSchedule.find(weekTime => state.weekDay[diasDaSemana.indexOf(weekTime.weekday)] )));
        return meetingHour;  
      })
    
    if(regionName)
      filteredCsas = filteredCsas.filter(csa => csa.region.Name === regionName)

    if(prodType)
      filteredCsas = filteredCsas.filter(csa => csa.production_types.find( pType => selectedProdTypes[ prodTypes.indexOf(pType.Name)] ))

    return filteredCsas
  }
  
  return (
    <div style={styles.contentContainer(layout)}>

      {layout === 'MOBILE' ?
        <div>Filtros</div>
        :
        <div>
          {/*<Filters />*/}
          <div>Ordenar por:</div>
          <RadioButton check={ viewType === 'csan'} onClick={()=> setViewType('csan')} label='nome das comunidades'/>
          <RadioButton check={ viewType === 'conv'} onClick={()=> setViewType('conv')} label='região do Ponto de Convivência'/>
          <RadioButton check={ viewType === 'prod'} onClick={()=> setViewType('prod')} label='região do local de produção'/>
          {viewType === 'conv' ?
            <div>
              <div>Dia do ponto de convivência:</div>
              {diasDaSemana.map((dia, index)=>
                <Checkbox label={dia} key={index} checked={state.weekDay[index]} onCheck={(check) => setState({...state, weekDay: [...state.weekDay.slice(0, index), check, ...state.weekDay.slice(index + 1)] })}/>
              )}
            </div>
          : viewType === 'prod'?
            <div>
              <div>Tipo de produção:</div>
              {prodTypes.map( (productionTypeName, index) =>
                  <Checkbox key={index} label={productionTypeName} checked={selectedProdTypes[index]} onCheck={check => setSelectedProdTypes([...selectedProdTypes.slice(0, index), check, ...selectedProdTypes.slice(index + 1)])} />
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
                convRegions ? convRegions.map((regionName, index) =>
                  <ExpansionPanel key={index}>
                    <ExpansionPanelSummary
                      style={{backgroundColor: '#E0E0E0'}}
                      expandIcon={<DownArrowIcon />}
                    >
                      {regionName}
                    </ExpansionPanelSummary>


                    <ExpansionPanelDetails>
                      {filterCSAs({meetingRegionName: regionName, weekDay: true}).map((csa, i) =>
                          <CsaListItem key={i} csa={csa} />
                      )}
                    </ExpansionPanelDetails>


                  </ExpansionPanel>
                ) : <div>Buscando dados...</div>
            :viewType === 'prod' ?
              prodRegions ? prodRegions.map((regionName, index) =>
                <ExpansionPanel key={index}>
                  <ExpansionPanelSummary
                    style={{backgroundColor: '#E0E0E0'}}
                    expandIcon={<DownArrowIcon />}
                  >
                    {regionName}
                  </ExpansionPanelSummary>


                  <ExpansionPanelDetails>
                    {filterCSAs({regionName: regionName, prodType: true})
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
