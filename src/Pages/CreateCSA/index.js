import React from 'react'
import { Redirect } from 'react-router-dom'

import request from '../../request.js'
import UserContext from '../../UserContext'

import StepSession from '../../components/StepSession'
import Session0 from './Session0'
import Session1 from './Session1'
import Session2 from './Session2'
import Session3 from './Session3'
import Session4 from './Session4'
import Session5 from './Session5'
import Session6 from './Session6'


const CreateCSA = () => {

  const user = React.useContext(UserContext)
  const [defaultData, setDefaultData] = React.useState({'regions': [], 'production-types': []})
  const [createdCSA, setCreatedCSA] = React.useState({})
  const [step, setStep] = React.useState(0);
  const [newCSA, setNewCSA] = React.useState([
    {
      Name: '',
    },
    {
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
        place: '',
        reference: '',
        weekday: '',
        weekSchedule:[{
          startTime: '',
          endTime: ''
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

  const setState = (index) => (newValue) => {
    setNewCSA([...newCSA.slice(0, index), newValue, ...newCSA.slice(index+1)])
  }

  const handleError = (error) => console.log('error:', error)

  const createCSA = () => {
    request('post', 'csas', 
      value => 
      { 
        setCreatedCSA(value)
        setStep(step + 1)
      }, handleError, newCSA[0], true)
  }
  const updateCSA = (session) => {
    request('put', `csas/${createdCSA.id}`, 
    value => {
      setCreatedCSA(value)
      setStep(step+1)
    }, handleError, newCSA[session], true)
  }

  const onComplete = () => {}
  const onCancel = () => {}

  const onPrevious = () => {}

  React.useEffect(()=>{
    setNewCSA([{...newCSA[0], users:[user.id]}, ...newCSA.slice(1)])
  }, [user])

  React.useEffect(() => {
    if(defaultData['production-types'].length === 0)
      request('get', 'production-types', (data) => setDefaultData({...defaultData, 'production-types': data}), handleError)
  }, [defaultData])

  React.useEffect(()=>{
    if(defaultData.regions.length === 0)
      request('get', 'regions', (data) => setDefaultData({...defaultData, 'regions': data}), handleError)
  }, [defaultData])

  React.useEffect(() => {
    if(createdCSA.id){
      let temp = Object.values(newCSA).slice(0)
      temp.map((blockInfo) => blockInfo.id = createdCSA.id)
      setNewCSA(temp)
    }
  }, [createdCSA])

  console.log('render')

  return(
    <div>
      <StepSession
        step={step} 
        nextButton='Avançar'
        previousButton='Voltar'
        lastNextButton='Concluir'
        firstPreviousButton='Cancelar'
        onComplete={onComplete}
        onCancel={onCancel}
        onNext={(session) => session === 0 ? createCSA() : updateCSA(session)}
        onPrevious={onPrevious}>
        <Session0 newCSA={newCSA[0]} setNewCSA={setState(0)} defaultData={defaultData}/>
        <Session1 newCSA={newCSA[1]} setNewCSA={setState(1)} defaultData={defaultData}/>
        <Session2 newCSA={newCSA[2]} setNewCSA={setState(2)} defaultData={defaultData}/>
        <Session3 newCSA={newCSA[3]} setNewCSA={setState(3)} defaultData={defaultData}/>
        <Session4 newCSA={newCSA[4]} setNewCSA={setState(4)} defaultData={defaultData}/>
        <Session5 newCSA={newCSA[5]} setNewCSA={setState(5)} defaultData={defaultData}/>
        <Session6 newCSA={newCSA[6]} setNewCSA={setState(6)} defaultData={defaultData}/>
      </StepSession>
      {/* newCSA.id ?
        <Redirect to={`/csas/csa/${newCSA.id}`} />
        :null
      */}
    </div>
  )
}

export default CreateCSA
