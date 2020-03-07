import React from 'react'
import UserContext from '../../UserContext'
import MessageOwner from '../MessageOwner'
import MessageSender from '../MessageSender'
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

const Message = ({message, onEdit, onDelete}) => {
  const user = React.useContext(UserContext)
  const [editMode, setEditMode] = React.useState(false)

  return(
    <div style={styles.container}>
      <div className='onExtremes'>
        <MessageOwner messageOwner={message.user} />
        {(user.id === message.user.id) && !editMode ?
          <div>
            <EditIcon onClick={ () => setEditMode(true) }/>
            <DeleteIcon onClick={onDelete(message.id)}/>
          </div>
          :null
        }
      </div>
      <div style={styles.time}>{formatDate(message.createdAt, true)}</div>

      {!editMode ?
        <div style={styles.text}>{message.text}</div>
        :<MessageSender initialValue={message.text} onCancel={() => setEditMode(false)} onSend={onEdit(message.id)}/>
      }

      {message.messages?.map( (item, index) =>
        <Message message={item} key={index} onEdit={onEdit} onDelete={onDelete}/>
      )}
    </div>
  )
}

export default Message
