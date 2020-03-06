import React from 'react'
import UserContext from '../../UserContext'
import MessageOwner from '../MessageOwner'
import MessageSender from '../MessageSender'
import { formatDate } from '../../utils.js'

const styles={
  container:{
    margin: 20
  },
  time:{
    marginLeft: 48,
    color: '#979797',
    fontSize: 12
  },
  text:{
    marginTop: 10
  },
  reply:{
    cursor: 'pointer',
    textAlign: 'right',
    color: '#009688',
    fontWeight: 500,
    fontSize: 12
  }
}

const Message = ({message}) => {
  const user = React.useContext(UserContext)
  const [reply, setReply] = React.useState(false)

  const onCancel = () => setReply(false)
  const onSend = () => {console.log('Send')}

  return(
    <div style={styles.container}>
      <MessageOwner messageOwner={message.user} />
      <div style={styles.time}>{formatDate(message.createdAt, true)}</div>
      <div style={styles.text}>{message.text}</div>
      {user.id && !reply ?
        <div style={styles.reply} onClick={() => setReply(true)}>RESPONDER</div>
        : <MessageSender onCancel={onCancel} onSend={onSend} />
      }
    </div>
  )
}

export default Message
