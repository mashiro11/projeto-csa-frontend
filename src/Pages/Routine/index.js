import React from 'react'

import request from '../../request.js'

const Routine = (props) => {
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
        </div>
        :
        <div>Fetchin data...</div>
      }
    </div>
  )
}

export default Routine
