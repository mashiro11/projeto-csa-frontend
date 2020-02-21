import React, { useState, useEffect } from 'react'

import request from '../../request.js'

import TopicListItem from '../../components/TopicListItem'

const Topics = () => {
  const [topics, setTopics] = useState([])
  const handleError = (error) => {
    console.log('error:', error)
  }

  useEffect( () => request('topics', setTopics, handleError), [])


  return (
    <div>
      <div>Filtros</div>

      <div>
        <div>Cabeçalho</div>
        {topics.length === 0 ?
          <div>Fetching data...</div>
        : topics.map((item, index) =>
          <TopicListItem topic={item} key={index}/>
        )}
      </div>
      
      <div>Nova Conversa</div>
    </div>
  )
}
export default Topics
