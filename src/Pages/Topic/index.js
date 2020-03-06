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
  const [newMessage, setNewMessage] = React.useState({})

  const loadPage = () => {
    setReply(false)
    request('get',`topics/${props.match.params.id}`, setTopic, handleError)
  }

  const handleData = (ctx) => (data) => {
    request('put', `${ctx.name}/${ctx.id}`,
            (d) => loadPage() ,
            handleError,
      {messages: [...ctx.messages, data.id]}, true)
  }

  const handleError = (error) => {
    console.log('error:', error)
  }

  const addMessage = (ctx, text) => {
    console.log('constructing addMessage with ctx:', ctx)
    request('post', 'messages',  handleData(ctx), handleError, {user: user.id, text: text}, true)
  }

  React.useEffect( loadPage, [])

  return(
    <div>
      {topic.id ?

        <div>

          <div style={styles.header}>
            <h2 style={styles.title}>{topic.name}</h2>
            <div style={styles.routinesBox}>
              <div style={styles.subinfo}>Práticas relacionadas a esse tema</div>
              { ["Rotina 1", "Rotina2", "Rotina 3"].map( (item, index) =>
                <Link style={styles.routines} to='' key={index}>{item}</Link>
              )}
            </div>
          </div>

          {!reply ?
            <div style={styles.messagesList}>
              {topic.messages.map( (item, index) =>
                <React.Fragment key={index}>
                  { index > 1 ? <hr/> : null }
                  <Message message={item} />
                  <MessageReplyer onSend={ (text) => () => {
                    addMessage({name: 'messages', id: item.id, messages: item.messages.filter( m => m.id)}, text)
                  }}/>
                </React.Fragment>
              )}
            </div>
            : <MessageSender onCancel={ () => setReply(false) }
                onSend={ (text) => () => {
                  addMessage({name: 'topics', id: topic.id, messages: topic.messages.filter( m => m.id)}, text)
                }}/>
          }
          <div className='button large centeredH' onClick={() => setReply(true) } >NOVA MENSAGEM</div>
        </div>
        : <div>Fetching data...</div>}
    </div>
  )
}

export default Topic
