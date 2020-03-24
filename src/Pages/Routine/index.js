import React from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../../UserContext'
import request from '../../request.js'

const Routine = (props) => {
  const user = React.useContext(UserContext)
  const [routine, setRoutine] = React.useState({})
  const handleError = (error) => {
    console.log('error:', error)
  }
  React.useEffect(() => request('get', `routines/${props.match.params.id}`, setRoutine, handleError), [])
  return(
    <div>
      {routine?
        <div>
          {routine.name}
          {user.id ? <Link to={{pathname:`/conversas/nova`, state: routine}} className='button small'>Adicionar conversa relacionada</Link>
          : null}
        </div>
        :
        <div>Fetchin data...</div>
      }
    </div>
  )
}

export default Routine
