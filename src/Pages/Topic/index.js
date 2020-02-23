import React, { useState, useEffect } from 'react'
import request from '../../request.js'

const Topic = (props) => {
  const [topic, setTopic] = useState({})

  const handleError = (error) => {
    console.log('error:', error)
  }

  useEffect( () => request(`topics/${props.match.params.id}`, setTopic, handleError), [])
  
  return(
    <div>
      {topic.id ?
      <div>Conversa {topic.name}
      </div>
    : <div>Fetching data...</div>}
    </div>
  )
}

export default Topic
