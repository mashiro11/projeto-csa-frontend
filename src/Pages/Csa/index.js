import React from 'react'

import UserContext from '../../UserContext'
import request from '../../request.js'

import ErrorHandler from '../../components/ErrorHandler'

const Csa = (props) => {
  const user = React.useContext(UserContext)
  const [csa, setCsa] = React.useState({})
  const [error, setError] = React.useState({})

  const retry = () => setError({})

  React.useEffect(() => request('get', `csas/${props.match.params.id}`, setCsa, setError), [error])

  return(
    <div>
      {error.isAxiosError ?
        <ErrorHandler tryagainTime={5} onTryAgain={retry} />
        :
        <div>
          {csa.nome}
        </div>
      }
    </div>
  )
}

export default Csa
