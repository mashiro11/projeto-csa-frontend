import React from 'react'
import { Redirect } from 'react-router-dom'

import request from '../../request.js'
import UserContext from '../../UserContext'

import StepSession from '../../components/StepSession'
import Session1 from './Session1'
import Session2 from './Session2'
import Session3 from './Session3'
import Session4 from './Session4'
import Session5 from './Session5'
import Session6 from './Session6'


const CreateCSA = () => {
  const [defaultData, setDefaultData] = React.useState([])
  const [newCSA, setNewCSA] = React.useState({
    name: '',
    agricultores: [''],
    trabalhadores: [''],
    df: true,
    regions: [''],
    productionTypes: [],
    newProductionType: '',
    cotas: true
  })

  const user = React.useContext(UserContext)

  const handleData = (csa) =>  setNewCSA(csa)
  const handleError = (error) => console.log('error:', error)

  const payload = {
    nome: newCSA.name,
    descricao: newCSA.description,
    users: [user.id]
  }

  const createCSA = () => {
    request('post', 'csas', handleData, handleError, payload, true)
  }

  const onComplete = () => {}
  const onCancel = () => {}
  const onNext = () => {}
  const onPrevious = () => {}

  React.useEffect(()=>request('get', 'production-types', setDefaultData, handleError), [])

  return(
    <div>
      <StepSession
        nextButton='Avançar'
        previousButton='Voltar'
        lastNextButton='Concluir'
        firstPreviousButton='Cancelar'
        onComplete={onComplete}
        onCancel={onCancel}
        onNext={onNext}
        onPrevious={onPrevious}>
        <Session1 newCSA={newCSA} setNewCSA={setNewCSA} defaultData={defaultData}/>
        <Session2 newCSA={newCSA} setNewCSA={setNewCSA} defaultData={defaultData}/>
        <Session3 newCSA={newCSA} setNewCSA={setNewCSA} defaultData={defaultData}/>
        <Session4 newCSA={newCSA} setNewCSA={setNewCSA} defaultData={defaultData}/>
        <Session5 newCSA={newCSA} setNewCSA={setNewCSA} defaultData={defaultData}/>
        <Session6 newCSA={newCSA} setNewCSA={setNewCSA} defaultData={defaultData}/>
      </StepSession>
      { newCSA.id ?
        <Redirect to={`/csas/csa/${newCSA.id}`} />
        :null
      }
    </div>
  )
}

export default CreateCSA
