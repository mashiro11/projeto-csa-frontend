import React from 'react'
import MessageSender from '../MessageSender'

const styles={
  container:{
    display: 'block',
    position: 'relative',
    paddingLeft: 20,
    paddingRight: 20
  },
  replyButton:{
    position: 'absolute',
    right: 20
  }
}

const MessageReplyer = ({onSend}) => {
  const [reply, setReply] = React.useState(false)
  return (
    <div style={styles.container}>
      { !reply ?
        <div className='textButton' style={styles.replyButton} onClick={() => setReply(true)}> RESPONDER</div>
        : <MessageSender onCancel={() => setReply(false)} onSend={onSend}/>
        }
    </div>
  )
}

export default MessageReplyer
