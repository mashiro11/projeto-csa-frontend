import React from 'react'
import MessageOwner from '../MessageOwner'

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
  console.log('message:', message)
  return(
    <div style={styles.container}>
      <MessageOwner messageOwner={message.user} />
      <div style={styles.time}>{formatDate(message.createdAt, true)}</div>
      <div style={styles.text}>{message.text}</div>
      <div style={styles.reply}>RESPONDER</div>
    </div>
  )
}

export default Message
