import React from 'react'
import Dropdown from '../Dropdown'

const Hour = ({onChange}) => {
  const [state, setState] = React.useState({hour:'Hora', minutes: 'minuto', value:''})

  return(
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Dropdown placeholder={'Hora'}
        currentValue={state.hour}
        values={['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
                 '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']}
        onClick={(hour)=>{
          setState({...state, hour: hour})
          onChange(`${hour}h${state.minutes}`)
        }}
      />
      <Dropdown placeholder={'minutos'}
        currentValue={state.minutes}
        values={['00', '30']}
        onClick={(minutes) => {
          setState({...state, minutes: minutes})
          onChange(`${state.hour}h${minutes}`)
        }}
      />
    </div>
  )
}

export default Hour
