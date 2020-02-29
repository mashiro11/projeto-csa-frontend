import React from 'react'

const Login = () => {
  const [user, setUser] = React.useState('')
  const [password, setPassword] = React.useState('')

  const loginRequest = () => {
    console.log('TODO: request login')
  }
  return(
    <div>
      Login:
      <div>
        <span>Usuário:</span>
        <input type='text' value={user}
          onChange={(e) => setUser(user + e.target.value) }/>
      </div>
      <div>
        <span>Senha:</span>
        <input type='password' value={password}
        onChange={(e) => setPassword(password + e.target.value) }/>
      </div>
      <button onClick={loginRequest}>Entrar</button>
    </div>
  )
}

export default Login
