import React from 'react'
import MessageOwner from '../MessageOwner'
import { formatDate } from '../../utils.js'

import DeleteIcon from '../../icons/Delete'
import EditIcon from '../../icons/Edit'

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

const Message = ({message, isOwner}) => {
  return(
    <div style={styles.container}>
      <div className='onExtremes'>
        <MessageOwner messageOwner={message.user} />
        {isOwner?
          <div>
            <EditIcon /><DeleteIcon />
          </div>
          :null
        }
      </div>
      <div style={styles.time}>{formatDate(message.createdAt, true)}</div>
      <div style={styles.text}>{message.text}</div>
      {message.messages?.map( (item, index) =>
        <Message message={item} key={index} />
      )}
    </div>
  )
}

export default Message
