import React from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../../UserContext'
import request from '../../request.js'

import Message from '../../components/Message'
import MessageReplyer from '../../components/MessageReplyer'
import MessageSender from '../../components/MessageSender'

const styles={
  header:{
    padding: 20,
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)'
  },
  subinfo:{
    color: '#979797'
  },
  messagesList:{
    paddingTop: 10,
    paddingBottom: 20
  },
  routinesBox:{
    marginBottom: 20
  },
  routines:{
    marginRight: 10,
    paddingRight: 10,
    borderRight: '1px solid #686868'
  }
}
const Topic = (props) => {
  const user = React.useContext(UserContext)
  const [topic, setTopic] = React.useState({})
  const [reply, setReply] = React.useState(false)

  const loadPage = (data) => {
    setReply(false)
    setTopic({})
    request('get',`topics/${props.match.params.id}`, setTopic, handleError)
  }

  const handleError = (error) => {
    console.log('error:', error)
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
  React.useEffect( loadPage, [])

  return(
    <div>
      {topic.id ?
        <>
          <div style={styles.header}>
            <h2 style={styles.title}>{topic.name}</h2>
            <div style={styles.routinesBox}>
              <div style={styles.subinfo}>Práticas relacionadas a esse tema</div>
              { topic.routines.map( (item, index) =>
                <Link style={styles.routines} to={`/rotinas/rotina/${item.id}`} key={index}>{item.name}</Link>
              )}
            </div>
          </div>

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
        </>
        : <div>Fetching data...</div>}
    </div>
  )
}

export default Topic
