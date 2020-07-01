import React from 'react'

import { Link, Redirect } from 'react-router-dom'

import request from '../../request.js'
import { database } from '../../database.js'
import UserContext from '../../UserContext.js'

const Register = ({setUser}) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmation, setConfirmation] = React.useState('')

  const user = React.useContext(UserContext)

  const signUpRequest = () => {
    password === confirmation ?
      request('post', 'auth/local/register', handleData, handleError,
      {
        username: email.substring(0, email.indexOf('@')),
        email: email,
        password:password
      })
      :handleError({
        message: 'senha e confirmação devem ser identicos.'
      })

    setEmail('')
    setPassword('')
    setConfirmation('')
  }

  const handleData = (data) => {
    document.cookie =`jwt=${data.jwt} ;path: ${database}`
    setUser(data.user)
  }

  const handleError = (error) => console.log('error:', error)

  return(
      <div style={{position: 'relative'}}>
        <div style={{margin: '0 auto', width: '30%', backgroundColor: '#efefef', padding: 30}}>
          Cadastro:
          Já tem um perfil?
          <Link to='/login'>Faça Login</Link>
          <div>
            <input placeholder='E-mail' type='text' value={email}
              onChange={(e) => setEmail(e.target.value) }/>
          </div>
          <div>
            <input placeholder='Senha' type='password' value={password}
            onChange={(e) => setPassword(e.target.value) }/>
          </div>
          <div>
            <input placeholder='Confirme a senha' type='password' value={confirmation}
            onChange={(e) => setConfirmation(e.target.value) }/>
          </div>
          <button onClick={signUpRequest}>CADASTRAR</button>
          {user.username ? <Redirect to='/' /> : null}
        </div>
      </div>
  )
}

export default Register
