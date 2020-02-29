import React from 'react'

import { Redirect } from 'react-router-dom'

import request from '../../request.js'
import { database } from '../../database.js'
import UserContext from '../../UserContext.js'

const Login = ({setUser}) => {
  const [identifier, setIdentifier] = React.useState('')
  const [password, setPassword] = React.useState('')
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
    console.log('error:', error)
  }

  return(
    <div>
      Login:
      <div>
        <span>Usuário:</span>
        <input type='text' value={identifier}
          onChange={(e) => setIdentifier(e.target.value) }/>
      </div>
      <div>
        <span>Senha:</span>
        <input type='password' value={password}
        onChange={(e) => setPassword(e.target.value) }/>
      </div>
      <button onClick={loginRequest}>Entrar</button>
      {user.username ? <Redirect to='/' /> : null}
    </div>
  )
}

export default Login
