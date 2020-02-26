import React, { useState, useEffect } from 'react'

import request from '../../request.js'

import TopicListItem from '../../components/TopicListItem'

import banner from './banner.jpg'

const styles = {
  bannerContainer:{
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 190,
    maxHeight: 250
  },
  bannerTitle:{
    display: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: 'white',
    height: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15
  },
  filters:{
    cursor: 'pointer',
    color: '#009688',
    backgroundColor: '#EEEEEE',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20
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
    justifyContent: 'space-between',
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
      <div style={styles.bannerContainer}>
        <div style={styles.bannerTitle}>CONVERSAS</div>
      </div>
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

      <div className='button'>NOVA CONVERSA</div>
    </div>
  )
}
export default Topics
