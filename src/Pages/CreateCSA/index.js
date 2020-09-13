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

  const user = React.useContext(UserContext)
  const [requested, setRequested] = React.useState(false)
  const [defaultData, setDefaultData] = React.useState({'regions': [], 'production-types': []})
  const [createdCSA, setCreatedCSA] = React.useState({})
  const [newCSA, setNewCSA] = React.useState([
    {
      name: '',
      users: [user.id],
      agricultores: [{name:''}],
      trabalhadores: [{name:''}],
      df: true,
      regions: [''],
      productionTypes: [],
      newProductionType: '',
      cotas: true
    },
    {
      id: createdCSA.id,
      meetingPoints:[{
        region:'',
        address: '',
        reference: '',
        schedule:[{
          day: '',
          hour: '',
          minutes: ''
        }]
      }]
    },
    {
      id: createdCSA.id,
      creationYear: '',
      creationMonth: '',
      description: '',
    },
    {
      id: createdCSA.id,
      email: '',
      phone: '',
      talkTo: '',
      websites:[''],
      facebook: '',
      instagram: ''
    },
    {
      id: createdCSA.id,
      images:[{
        file: '',
        description: ''
      }],
      videos:['']
    },
    {
      id: createdCSA.id,
      faq: [{
        question: '',
        answer: ''
      }]
    }
])

  const handleError = (error) => console.log('error:', error)

  const createCSA = () => request('post', 'csas', setCreatedCSA, handleError, newCSA[0], true)
  const updateCSA = (session) => request('put', `csas/${createdCSA.id}`, setCreatedCSA, handleError, newCSA[session], true)

  const onComplete = () => {}
  const onCancel = () => {}

  const onPrevious = () => {}

  React.useEffect(() => {
    /*
        Should correct this! A single request should get all data
    */
    //if(!requested){
      //setRequested(true)
    if(defaultData['production-types'].length === 0)
      request('get', 'production-types', (data) => setDefaultData({...defaultData, 'production-types': data}), handleError)
    if(defaultData.regions.length === 0)
      request('get', 'regions', (data) => setDefaultData({...defaultData, 'regions': data}), handleError)
    //}
    setNewCSA({...newCSA, 0:{...newCSA[0], users:[user.id]} })
  }, [defaultData, user])

  return(
    <div>
      <StepSession
        nextButton='Avançar'
        previousButton='Voltar'
        lastNextButton='Concluir'
        firstPreviousButton='Cancelar'
        onComplete={onComplete}
        onCancel={onCancel}
        onNext={(session) => session === 0 ? createCSA() : updateCSA(session)}
        onPrevious={onPrevious}>
        <Session1 newCSA={newCSA[0]} setNewCSA={(newData) => setNewCSA({...newCSA, 0: newData})} defaultData={defaultData}/>
        <Session2 newCSA={newCSA[1]} setNewCSA={(newData) => setNewCSA({...newCSA, 1: newData})} defaultData={defaultData}/>
        <Session3 newCSA={newCSA[2]} setNewCSA={(newData) => setNewCSA({...newCSA, 2: newData})} defaultData={defaultData}/>
        <Session4 newCSA={newCSA[3]} setNewCSA={(newData) => setNewCSA({...newCSA, 3: newData})} defaultData={defaultData}/>
        <Session5 newCSA={newCSA[4]} setNewCSA={(newData) => setNewCSA({...newCSA, 4: newData})} defaultData={defaultData}/>
        <Session6 newCSA={newCSA[5]} setNewCSA={(newData) => setNewCSA({...newCSA, 5: newData})} defaultData={defaultData}/>
      </StepSession>
      {/* newCSA.id ?
        <Redirect to={`/csas/csa/${newCSA.id}`} />
        :null
      */}
    </div>
  )
}

export default CreateCSA
