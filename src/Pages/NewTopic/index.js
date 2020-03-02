import React from 'react'
import { Redirect } from 'react-router-dom'

import request from '../../request.js'

const NewTopic = () => {
  const [newTopic, setNewTopic] = React.useState({notSent: true})
  const [topicName, setTopicName] = React.useState('')

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
              <input type='text' value={topicName} onChange={ e => setTopicName(e.target.value)}/>
              <div>Comentário sobre o tema</div>
              <input type='text' />
              <div>Anexos</div>
              <div className='link'>Insira uma imagem ou um documento</div>

              <div>Práticas relacionadas ao tema</div>
              <div className='link'>Selecione  uma ou mais práticas</div>
              <button className='button' onClick={submit}>
                PUBLICAR
              </button>
            </div>
          </div>
        </div>
    }
  </div>)
}

export default NewTopic
