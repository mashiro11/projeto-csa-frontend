import React from 'react'
import { Redirect } from 'react-router-dom'

import request from '../../request.js'

const NewTopic = () => {
  const [routines, setRoutines] = React.useState([])
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
    request('post', 'topics', handleData, handleError,
    {
      name: topicName
    },
    true)
  }

  React.useEffect( () => request('get','routines', handleRoutines, handleError), [])

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
              <div className='link'>Selecione  uma ou mais práticas</div>
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
