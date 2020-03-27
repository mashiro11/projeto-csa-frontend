import React from 'react'

const ErrorHandler = ({tryagainTime, onTryAgain}) => {
  const [timer, setTimer] = React.useState(tryagainTime)

  React.useEffect(() => {
    if(timer <= 0){
      onTryAgain()
    }else{
      window.setTimeout(() => setTimer(timer - 1), 1000)
    }},
    [timer])

  return(
    <div>
      Problema de conexão. Tentando novamente em {timer} segundos.
    </div>
  )
}
export default ErrorHandler
