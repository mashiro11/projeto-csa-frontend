import React from 'react'

import { Link, Redirect } from 'react-router-dom'
import request from '../../request.js'
import { database } from '../../database.js'
import UserContext from '../../UserContext.js'
import IconedInput from 'components/IconedInput/index.js'

const Login = ({setUser}) => {
  const [identifier, setIdentifier] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState({})
  const user = React.useContext(UserContext)

  const loginRequest = () => {
    request('post', 'auth/local', handleData, handleError,
    {
      identifier: identifier,
      password:password
    })
  }

  const handleData = (data) => {
    document.cookie =`jwt=${data.jwt} ;path: ${database}`
    setIdentifier('')
    setPassword('')
    setUser(data.user)
  }

  const handleError = (error) => {
    console.log('error fields: ', Object.keys(error))
    console.log('config:', error.config)
    console.log('request:', error.request)
    console.log('response:', error.response)
    console.log('isAxiosError:', error.isAxiosError)
    console.log('toJson:', error.toJson)
    setError(error)
  }

  return(
    <div style={{position: 'relative'}}>
      <div style={{margin: '0 auto', width: '30%', backgroundColor: '#efefef', padding: 30}}>
        <div>Bem vindo!</div>
        <div>Ainda não tem um cadastro? <Link to="/cadastro">Crie seu login.</Link></div>
        { error.isAxiosError ?
            error.response.status === 400 ?
            <div style={{color: '#FF0000', fontSize: '12px'}}>Email ou senha inválidos</div> : null
          : null
        }
        <IconedInput icon={"Email"} onChange={(e) => setIdentifier(e.target.value)} placeholder={'Usuario ou email'} value={identifier} />
        <IconedInput icon={"Lock"} onChange={(e) => setPassword(e.target.value)} placeholder={'Senha'} value={password} type={'password'} />
        <button onClick={loginRequest}>Entrar</button>
        { error.isAxiosError ?
            error.response.status === 400 ?
            <div>
              <Link to='/'>Esqueci minha senha</Link>
            </div> : null
          : null
        }
        {user.username ? <Redirect to='/'/> : null}
      </div>
    </div>
  )
}

export default Login
