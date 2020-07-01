import React from 'react'
import { Redirect } from 'react-router-dom'
import UserContext from '../../UserContext'

const Profile = ({props, setUser}) => {
  const week = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
  const user = React.useContext(UserContext)
  const logout = () => {
    document.cookie = 'jwt=;'
    setUser({})
  }

  const signUpDate = new Date(user.createdAt)
  const signUpDateString = `${week[signUpDate.getDay()]}, ${signUpDate.getDate()}/${signUpDate.getMonth()}/${signUpDate.getFullYear()}`

  return(
    <div>
      <div>Perfil de usuário</div>
      <div>
        Nome: {user.username}
      </div>
      <div>
        email: {user.email}
      </div>
      <div>
        Entrou na plataforma dia: {signUpDateString}
      </div>
      <button onClick={logout}>Logout</button>
      {!user.username ? <Redirect to='/' /> : null}
     </div>
  )
}

export default Profile
