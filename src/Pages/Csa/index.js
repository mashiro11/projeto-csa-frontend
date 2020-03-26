import React from 'react'

import UserContext from '../../UserContext'
import request from '../../request.js'

const Csa = (props) => {
  const user = React.useContext(UserContext)
  const [csa, setCsa] = React.useState({})
  const [error, setError] = React.useState({})
  const [timer, setTimer] = React.useState(0)

  const handleError = (error) => {
    setError(error)
    setTimer(5)
  }

  React.useEffect(()=> {
    if(timer <= 0){
      setError({})
      request('get', `csas/${props.match.params.id}`, setCsa, handleError)
    }else
      window.setTimeout(() => setTimer(timer - 1), 1000)
    },[timer])

  return(
    <div>
      {error.isAxiosError ?
        <div>Problemas de conexão. Tentando novamente em {timer} segundos</div>
        :
        <div>
          {csa.nome}
        </div>
      }
    </div>
  )
}

export default Csa
