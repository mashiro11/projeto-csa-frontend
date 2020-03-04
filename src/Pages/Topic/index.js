import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import request from '../../request.js'

import Message from '../../components/Message'

const styles={
  header:{
    paddingRight: 20,
    paddingLeft: 20
  },
  title:{

  },
  subinfo:{
    color: '#979797'
  },
  messagesList:{
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#EEEEEE'
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
        <div style={styles.header}>
          <h2 style={styles.title}>{topic.name}</h2>
          <div style={styles.routinesBox}>
            <div style={styles.subinfo}>Práticas relacionadas a esse tema</div>
            { ["Rotina 1", "Rotina2", "Rotina 3"].map( (item, index) =>
              <Link style={styles.routines} to='' key={index}>{item}</Link>
            )}
          </div>
        </div>
        <div>
          <div style={styles.messagesList}>
            {topic.messages.map( (item, index) =>
              <React.Fragment key={index}>
                { index > 1 ? <hr/> : null }
                <Message message={item} />
              </React.Fragment>
            )}
          </div>
          <div className='button large' >NOVA MENSAGEM</div>
        </div>
      </div>
    : <div>Fetching data...</div>}
    </div>
  )
}

export default Topic
