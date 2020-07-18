import React from 'react'

import { Link, Redirect } from 'react-router-dom'

import request from '../../request.js'
import { database } from '../../database.js'
import UserContext from '../../UserContext.js'

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
        <div>Login:</div>
        { error.isAxiosError ?
            error.response.status === 400 ?
            <div style={{color: '#FF0000', fontSize: '12px'}}>Email ou senha inválidos</div> : null
          : null
        }
        <div>
          <input placeholder='Usuario ou email' type='text' value={identifier}
            onChange={(e) => setIdentifier(e.target.value) }/>
        </div>
        <div>
          <input placeholder='Senha' type='password' value={password}
          onChange={(e) => setPassword(e.target.value) }/>
        </div>
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
