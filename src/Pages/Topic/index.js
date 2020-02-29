import React, { useState, useEffect } from 'react'
import request from '../../request.js'


const styles={
  messagesList:{
    backgroundColor: '#EEEEEE'
  }
}
const Topic = (props) => {
  const [topic, setTopic] = useState({})

  const handleError = (error) => {
    console.log('error:', error)
  }

  useEffect( () => request('get',`topics/${props.match.params.id}`, setTopic, handleError),
            [props.match.params.id])

  return(
    <div>
      {topic.id ?
      <div>
        <div>
          <h2>{topic.name}</h2>
          <div>
            <div>Práticas relacionadas a esse tema</div>
            <div>Práticas</div>
          </div>
        </div>
        <div style={styles.messagesList}>
          <div>
            {topic.messages.map( (item, index) =>
              <div key={index}>{item.text}</div>
            )}
          </div>
          <div className='button'>NOVA MENSAGEM</div>
        </div>
      </div>
    : <div>Fetching data...</div>}
    </div>
  )
}

export default Topic
