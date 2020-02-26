import React, { useState, useEffect } from 'react'

import request from '../../request.js'

import TopicListItem from '../../components/TopicListItem'

const styles = {
  filters:{
    cursor: 'pointer',
    color: '#009688',
    backgroundColor: '#EEEEEE',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  filterQuant:{
    display: 'inline-block',
    color: '#FFFFFF',
    fontSize: 12,
    backgroundColor: '#009688',
    paddingRight: 5,
    paddingLeft: 5,
    borderRadius: '50%',
    fontWeight: 'bold'
  },
  header:{
    display: 'flex',
    color: '#DF8400',
    fontStyle: 'normal',
    fontWeight: 500,
    margin: 20
  }
}
const Topics = () => {

  const [topics, setTopics] = useState([])
  const handleError = (error) => {
    console.log('error:', error)
  }

  useEffect( () => request('topics', setTopics, handleError), [])

  return (
    <div>
      <div style={styles.filters}>
        <span>Filtros</span>
        <span> </span>
        <span style={styles.filterQuant}>5</span>
      </div>

      <div>
        <div style={styles.header}>
          <div>TEMAS</div>
          <div>COMENTÁRIOS</div>
        </div>
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
