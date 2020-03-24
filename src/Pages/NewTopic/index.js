import React from 'react'
import { Redirect } from 'react-router-dom'

import UserContext from '../../UserContext'
import Checkbox from '../../components/Checkbox'

import request from '../../request.js'

const NewTopic = (props) => {
  const user = React.useContext(UserContext)
  const [routines, setRoutines] = React.useState([])
  const [relatedRoutines, setRelatedRoutines] = React.useState([])
  const [newTopic, setNewTopic] = React.useState({notSent: true})
  const [topicName, setTopicName] = React.useState('')
  const [firstMessage, setFirstMessage] = React.useState('')

  const handleRoutines = (data) => {
    setRoutines(data)
  }

  const handleData = (data) => {
    setNewTopic(data)
  }

  const handleError = (error) => {
    console.log('error:', error)
  }

  const submit = () => {
    if(relatedRoutines.length > 0){
      request('post', 'topics', handleData, handleError,
      {
        name: topicName,
        routines: relatedRoutines,
        message: {
          text: firstMessage,
          user: user.id
        }
      },true)
    }else{
      window.alert('Conversas devem ter ao menos uma rotina relacionada!')
    }
  }

  const editRelatedRoutine = (routineId) => (value) => {
    console.log('value:', value)
    if(value) setRelatedRoutines([...relatedRoutines, routineId])
    else setRelatedRoutines([...relatedRoutines.filter( rId => rId !== routineId)])
  }

  React.useEffect( () => {
    const relatedRoutine = props.location.state
    if(relatedRoutine) setRelatedRoutines([relatedRoutine.id])
    request('get','routines', handleRoutines, handleError)
  }, [])


  return(
    <div>
    {newTopic.id ? <Redirect to={`/conversas/conversa/${newTopic.id}`} />
      : <div>
          <div>
            <div>Conversas</div>
            <div>Publicar nova</div>
          </div>
          <div>
            <div>
              <div>Tema</div>
              <input type='text' value={topicName}
                onChange={ e => setTopicName(e.target.value)}/>

              <div>Comentário sobre o tema</div>
              <input type='text' value={firstMessage}
                onChange={ e => setFirstMessage(e.target.value)} />

              <div>Anexos</div>
              <div className='link'>Insira uma imagem ou um documento</div>

              <div>Práticas relacionadas ao tema</div>
              <div className='link'>Selecione uma ou mais práticas</div>
              { routines? routines.map((routine, index)=>
                <div key={index}>
                  <Checkbox onCheck={editRelatedRoutine(routine.id)} checked={props.location.state ? routine.id === props.location.state.id : false} />{routine.name}
                </div>
              ):null}
              <div className='button' onClick={submit}>
                PUBLICAR
              </div>
            </div>
          </div>
        </div>
    }
  </div>)
}

export default NewTopic
