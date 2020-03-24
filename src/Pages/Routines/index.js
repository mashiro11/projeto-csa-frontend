import React from 'react'
import { Link } from 'react-router-dom'

import request from '../../request.js'
const Routines = () => {
  const [routines, setRoutines] = React.useState([])
  const handleError = (error) => {
    console.log('error:', error)
  }
  React.useEffect(() => request('get', 'routines', setRoutines, handleError), [])
  return (
    <div>
      Rotinas:
      {routines.length > 0 ?
        routines.map( (routine, index) =>
          <div key={index}>
            <Link to={`rotinas/rotina/${routine.id}`} >{routine.name}</Link>
          </div>
        )
        : <div>Fetching data...</div>
      }
    </div>

  )
}
export default Routines
