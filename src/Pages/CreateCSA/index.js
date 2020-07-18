import React from 'react'
import { Redirect } from 'react-router-dom'

import request from '../../request.js'
import UserContext from '../../UserContext'

const CreateCSA = () => {

  const [csaName, setCSAName] = React.useState('')
  const [csaDescription, setCSADescription] = React.useState('')
  const [newCSA, setNewCSA] = React.useState({})
  const user = React.useContext(UserContext)

  const handleData = (csa) =>  setNewCSA(csa)
  const handleError = (error) => console.log('error:', error)

  const payload = {
    nome: csaName,
    descricao: csaDescription,
    users: [user.id]
  }

  const createCSA = () => {
    request('post', 'csas', handleData, handleError, payload, true)
  }

  console.log('newCSA: ', newCSA)

  return(
    <div>
      <div>Página para criar uma CSA</div>
      <input type='text' placeholder='Nome da CSA' onChange={(e) => setCSAName(e.target.value) } value={csaName}/><br/>
      <input type='textarea' placeholder='Descrição' onChange={(e) => setCSADescription(e.target.value)} value={csaDescription}/><br/>
      <button onClick={createCSA}>Criar</button>
      { newCSA.id ?
        <Redirect to={`/csas/csa/${newCSA.id}`} />
        :null
      }
    </div>
  )
}
/**/
export default CreateCSA
