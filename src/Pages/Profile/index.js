import React from 'react'
import { Link, Redirect } from 'react-router-dom'
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
      {user.csa ?
        <div>
          Minha CSA:
          <Link to={`/csas/csa/${user.csa.id}`}>
            {user.csa.nome}
          </Link>
        </div>
        :
        <div>
          <div>Ainda não participa de uma CSA</div>
          <Link to="/csas/nova">Criar uma CSA</Link>
          <button>Participar de uma CSA existente</button>
        </div>
      }
      <button onClick={logout}>Logout</button>
      {!user.username ? <Redirect to='/' /> : null}
      {}
     </div>
  )
}

export default Profile
