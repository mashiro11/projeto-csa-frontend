import React from 'react'
import MessageSender from '../MessageSender'

const MessageReplyer = ({onSend}) => {
  const [reply, setReply] = React.useState(false)
  return (
    <div>
      { !reply ?
        <div onClick={() => setReply(true)}> Responder</div>
        : <MessageSender onCancel={() => setReply(false)} onSend={onSend}/>
        }
    </div>
  )
}

export default MessageReplyer
