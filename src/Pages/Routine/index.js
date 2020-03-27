import React from 'react'
import { Link } from 'react-router-dom'

import ErrorHandler from '../../components/ErrorHandler'

import UserContext from '../../UserContext'
import request from '../../request.js'

const Routine = (props) => {
  const user = React.useContext(UserContext)
  const [routine, setRoutine] = React.useState({})
  const [error, setError] = React.useState({})
  const retry = () => setError({})

  React.useEffect(() => request('get', `routines/${props.match.params.id}`, setRoutine, setError), [error])
  return(
    <div>
      {error.isAxiosError?
        <ErrorHandler tryagainTime={5} onTryAgain={retry} />
        :
        routine?
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
