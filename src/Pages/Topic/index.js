import React from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../../UserContext'
import LayoutContext from '../../LayoutContext'

import request from '../../request.js'

import ErrorHandler from '../../components/ErrorHandler'
import Message from '../../components/Message'
import MessageReplyer from '../../components/MessageReplyer'
import MessageSender from '../../components/MessageSender'
import styles from './styles.js'

const Topic = (props) => {
  //const layout = React.useContext(LayoutContext)
  const user = React.useContext(UserContext)
  const [topic, setTopic] = React.useState({})
  const [reply, setReply] = React.useState(false)
  const [error, setError] = React.useState({})
  const populate = "?populate[0]=routines&populate[1]=messages"

  const loadPage = (data) => {
    setReply(false)
    setTopic({})
    request('get',`topics/${props.match.params.id}`, setTopic, setError, null, false, populate)
  }
  const retry = () => setError({})

  const handleError = (err) => {
    if(!error.isAxiosError) setError(err)
  }

  const addMessage = (model, text) => {
    request('post', 'messages',  loadPage, handleError, {...model, user: user.id, text: text}, true)
  }

  const deleteMessage = (id) => () => {
    request('delete', `messages/${id}`, loadPage, handleError, null, true)
  }

  const editMessage = (id) => (text) => () => {
    request('put', `messages/${id}`, loadPage, handleError, {text: text}, true)
  }
  React.useEffect(loadPage, [error])

  return(
    <div style={styles.container}>
      {error.isAxiosError ?
        <ErrorHandler tryagainTime={5} onTryAgain={retry} />
        :
        topic.id ?
          <div style={{position: 'relative'}}>
            <header>
              <div className='content'>
                <h2 style={styles.title}>{topic.Name}</h2>
                <div style={styles.routinesBox}>
                  <div style={styles.subinfo}>Práticas relacionadas a esse tema</div>
                  { topic.routines.map( (item, index) =>
                    <Link style={styles.routines} to={`/rotinas/rotina/${item.id}`} key={index}>{item.Name}</Link>
                  )}
                </div>
              </div>
            </header>

            <div className='content'>
              {!reply ?
                <div style={styles.messagesList}>
                  {topic.messages.map( (item, index) =>
                    <React.Fragment key={index}>
                      { index > 0 ? <hr/> : null }
                      <Message message={item} onEdit={ editMessage } onDelete={ deleteMessage } />
                      {user.id ?
                        <MessageReplyer
                          onSend={ (text) => () => {
                            addMessage({message: item.id}, text)
                          }}
                        />
                        :null
                      }
                    </React.Fragment>
                  )}
                </div>
                : <MessageSender onCancel={ () => setReply(false) }
                    onSend={ (text) => () => addMessage({topic: topic.id}, text)}
                  />
              }
              {user.id && !reply ?
                <div className='button large centeredH' onClick={() => setReply(true) }>NOVA MENSAGEM</div>
                : null
              }
            </div>
          </div>
          :
          <div>Buscando informações da conversa...</div>
    }
    </div>
  )
}

export default Topic
