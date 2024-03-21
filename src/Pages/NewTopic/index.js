import React from 'react'
import { Redirect } from 'react-router-dom'

import UserContext from '../../UserContext'

import ErrorHandler from '../../components/ErrorHandler'
import Drawer from '../../components/Drawer'
import Checkbox from '../../components/Checkbox'

import request from '../../request.js'

const NewTopic = (props) => {
  const user = React.useContext(UserContext)
  const [routines, setRoutines] = React.useState([])
  const [relatedRoutines, setRelatedRoutines] = React.useState([])
  const [error, setError] = React.useState({})
  const [newTopic, setNewTopic] = React.useState({notSent: true})
  const [topicName, setTopicName] = React.useState('')
  const [firstMessage, setFirstMessage] = React.useState('')

  const handleRoutines = (data) => {
    setRoutines(data)
  }

  const handleData = (data) => {
    setNewTopic(data)
  }

  const retry = () => setError({})

  const handleError = (err) => {
    if(!error.isAxiosError) setError(err)
  }

  const submit = () => {
    if(relatedRoutines.length > 0){
      request('post', 'topics', handleData, handleError,
      {
        Name: topicName,
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
  }, [error])


  return(
    <div style={{position: 'relative'}}>
    {newTopic.id ? <Redirect to={`/conversas/conversa/${newTopic.id}`} />
  : <div style={{margin: '0 auto'}}>
          <header>
            Publicar nova conversa
          </header>
          <div>
            <div>
              <div>Tema</div>
              <input className='text' type='text' value={topicName}
                onChange={ e => setTopicName(e.target.value)}/>

              <div>Comentário sobre o tema</div>
              <textarea value={firstMessage}
                onChange={ e => setFirstMessage(e.target.value)} />

              <div>Anexos</div>
              <div className='link'>Insira uma imagem ou um documento</div>

              <div>Práticas relacionadas ao tema</div>
              <Drawer initialState='closed' moveLabelDown
                labelType='text'
                openLabel='Selecione uma ou mais práticas'
                closeLabel='Fechar lista de práticas'
              >
                {error.isAxiosError?
                  <ErrorHandler tryagainTime={5} onTryAgain={retry} />
                  :
                  routines? routines.map((routine, index)=>
                    <div key={index}>
                      <Checkbox label={routine.Name} onCheck={editRelatedRoutine(routine.id)} checked={props.location.state ? routine.id === props.location.state.id : false} />
                    </div>
                  ):null}
              </Drawer>
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
