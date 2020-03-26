import React from 'react'
import { Link } from 'react-router-dom'
import request from '../../request.js'

const Csas = () => {
  const [csas, setCsas] = React.useState([])
  const [error, setError] = React.useState({})
  const [timer, setTimer] = React.useState(0)

  const handleError = (error) => {
    setError(error)
    setTimer(5)
  }

  React.useEffect(() => {
    if(timer <= 0){
      setError({})
      request('get', 'csas', setCsas, handleError)
    }
    else
      window.setTimeout(()=>setTimer(timer - 1), 1000)
    }, [timer])

  return (
    <div>
      {error.isAxiosError ?
        <div>Problema de conexão. Tentando novamente em {timer} segundos</div>
        :
        <div>
          CSAs:
          {!csas.length ?
            <div> Buscando CSAs...
            </div>
          :null}

          {csas.map( (item, index) =>
            <div key={index}>
              <Link to={`csas/csa/${item.id}`}>{item.nome}</Link>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default Csas
