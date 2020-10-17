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
  console.log('user: ', user)
  return(
    <div>
      <div>
        <div>Meu perfil</div>
        <div>
          {user.username}
        </div>
        <hr/>
      </div>

      <div>
        <img src='https://i.pravatar.cc/38' alt='user' className='avatar' />
        <div>
          {user.username}
          <img src='https://i.pravatar.cc/38' alt='icon' className='avatar' />
        </div>
        <div>
          membro desde {signUpDateString}
        </div>
        <hr/>
      </div>

      <div>
        <div>MEUS DADOS</div>
        {user.csa ?
          <div>

            <div>
              CSA que participa:
              <Link to={`/csas/csa/${user.csa.id}`}>
                {user.csa.name}
              </Link>
            </div>

            <div>
              Vínculo com a CSA: TODO
            </div>

            <div>
              Comissão: TODO
            </div>

            <div>
              email: {user.email}
            </div>

          </div>
          :
          <div>
            <div>Ainda não participa de uma CSA</div>
            <Link to="/csas/nova">Criar uma CSA</Link>
            <button>Participar de uma CSA existente</button>
          </div>
        }
        <Link>Editar dados e senha</Link>
        <hr/>
      </div>

      <div>
        <div>CONVERSAS QUE PARTICIPO</div>
        <div>TODO</div>
        <button>TODAS AS CONVERSAS</button>
        <hr/>
      </div>

      <div>
        <div>REGISTROS DA MINHA CSA</div>
        <div>TODO</div>
        <button>TODOS OS REGISTROS</button>
        <hr/>
      </div>

      <div>
        <div>NOTIFICAÇÕES</div>
        <div>TODO</div>
      </div>

      <button onClick={logout}>Sair</button>
      {!user.username ? <Redirect to='/' /> : null}
      {}
     </div>
  )
}

export default Profile
